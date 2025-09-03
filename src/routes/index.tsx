import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useWeb3Kit, type Web3Kit } from '@/components/Web3Kit'
import { Configs, NetInfos, type CaipNetID, type ChainType } from '@/config'
import { isProd, isTest } from '@/env'
import { getUserInfoBy, upDepositHash } from '@/lib/apis'
import { genPromise, handleError, toNumber, type UnPromise } from '@/lib/mutils'
import { waitTronTx } from '@/lib/tron'
import { cn } from '@/lib/utils'
import { type U3Deposit } from '@/solfile/u3_deposit'
import idlU3Deposit from '@/solfile/u3_deposit.json'
import { AnchorProvider, BN, Program, setProvider } from '@coral-xyz/anchor'
import {
  getAssociatedTokenAddress,
  getAccount,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token'
import {
  useAnchorWallet,
  useConnection as useSolConn,
} from '@solana/wallet-adapter-react'
import { PublicKey } from '@solana/web3.js'
import { useMutation } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks'
import { Loader2Icon } from 'lucide-react'
import { useRef, useState } from 'react'
import { toast } from 'sonner'
import { TronWeb } from 'tronweb'
import { erc20Abi, parseAbi, parseUnits, toBytes, type Address } from 'viem'
import { usePublicClient, useSwitchChain, useWalletClient } from 'wagmi'

export const Route = createFileRoute('/')({
  component: App,
})

const products = ['Card', 'Martin'] as const
const amounts = [50, 100, 500, 1000]
const supportNets = ['TRC20', 'BSC', 'Solana', 'Polygon'] as const
const callApi = isProd || isTest
type DepositFun = (
  amountBn: bigint,
  e: string,
  c: Exclude<(typeof Configs)[CaipNetID], undefined>,
  netId: CaipNetID,
) => Promise<string>
function App() {
  const [product, setProduct] = useState<(typeof products)[number]>(products[0])
  const [emailOrUID, setEmailOrUID] = useState('')
  const [inputAmount, setInputAmount] = useState('')
  const eipNet = useSwitchChain()
  const eipW = useWalletClient()
  const eipPC = usePublicClient()
  const solW = useAnchorWallet()
  const solConn = useSolConn()
  const tronW = useWallet()
  const refTopUpNow = useRef<HTMLDivElement>(null)
  const depositByEip: DepositFun = async (amountBn, email, config) => {
    console.info('provider:', eipW.data, config)
    if (!eipW.data || !eipPC) throw new Error('Need connected!')
    const user = eipW.data.account.address
    const deposit = config.deposit as Address
    const asset = config.asset as Address
    const chainId = await eipPC.getChainId()
    const balance = await eipPC.readContract({
      abi: erc20Abi,
      functionName: 'balanceOf',
      address: asset,
      args: [user],
    })
    if (balance < amountBn) throw new Error('Balance too low!')
    const allownce = await eipPC.readContract({
      abi: erc20Abi,
      functionName: 'allowance',
      address: asset,
      args: [user, deposit],
    })
    console.info('eipCheck', { chainId, allownce, user })
    if (allownce < amountBn) {
      const simuApprove = await eipPC.simulateContract({
        account: user,
        abi: erc20Abi,
        functionName: 'approve',
        address: asset,
        args: [deposit, amountBn],
      })
      console.info('simuRes:', simuApprove.result, simuApprove.request)
      const hashApprove = await eipW.data.writeContract({
        ...simuApprove.request,
        account: user,
      })
      const receiptApprove = await eipPC.waitForTransactionReceipt({
        hash: hashApprove,
      })
      if (receiptApprove.status !== 'success')
        throw new Error(`Approve Error: ${receiptApprove.status}`)
    }
    const simuDeposit = await eipPC.simulateContract({
      account: user,
      abi: parseAbi([
        'function deposit(uint256 amount, string calldata email) external',
      ]),
      functionName: 'deposit',
      address: deposit,
      args: [amountBn, email],
    })
    const hashDeposit = await eipW.data.writeContract({
      ...simuDeposit.request,
      account: user,
    })
    const receiptDeposit = await eipPC.waitForTransactionReceipt({
      hash: hashDeposit,
    })
    if (receiptDeposit.status !== 'success')
      throw new Error(`Deposit Error: ${receiptDeposit.status}`)
    return hashDeposit
  }
  const depositBySol: DepositFun = async (amountBn, email, config) => {
    if (!solW) throw new Error('Need connected!')
    console.info('sol wallet:', solW.publicKey.toString(), solW, idlU3Deposit)
    const provider = new AnchorProvider(solConn.connection, solW, {})
    setProvider(provider)
    const program = new Program<U3Deposit>(idlU3Deposit, provider)
    const depositPool = new PublicKey(config.deposit)

    // Get current pool info
    const poolAccount = await program.account.depositPool.fetch(depositPool)
    const usdtMint = poolAccount.usdtMint
    const recipient = poolAccount.recipient

    // Calculate user deposit PDA
    const [userDeposit] = PublicKey.findProgramAddressSync(
      [
        toBytes('user_deposit'),
        solW.publicKey.toBuffer(),
        depositPool.toBuffer(),
      ],
      program.programId,
    )

    // Get or create user USDT account
    const userUsdtAccount = await getAssociatedTokenAddress(
      usdtMint,
      solW.publicKey,
    )
    const userUsdtAccountInfo = await getAccount(
      solConn.connection,
      userUsdtAccount,
    ).catch(() => null)
    console.info('userUsdtInfo:', userUsdtAccountInfo?.amount)
    if (!userUsdtAccountInfo || userUsdtAccountInfo.amount < amountBn)
      throw new Error('Balance too low!')
    // Get or create recipient USDT account
    const recipientUsdtAccount = await getAssociatedTokenAddress(
      usdtMint,
      recipient,
    )
    const amountBN = new BN(amountBn.toString())
    console.info('amount:', amountBN, amountBN.toString())
    // deposit
    const tx = await program.methods
      .deposit(amountBN, email)
      .accountsPartial({
        userDeposit,
        depositPool,
        usdtMint,
        userUsdtAccount,
        recipient,
        recipientUsdtAccount,
        user: solW.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
      })
      .transaction()
    return await provider.sendAndConfirm(tx)
  }

  const depositByTron: DepositFun = async (amountBn, email, config, netId) => {
    console.info('tron wallet:', tronW)
    const tronWeb = new TronWeb({ fullHost: NetInfos[netId].rpc! })
    const trc20Contract = tronWeb.contract(erc20Abi, config.asset)
    const assetBalance = await trc20Contract
      .balanceOf(tronW.address!)
      .call({ from: tronW.address! })
    const assetBalanceBn = BigInt(assetBalance || 0)
    if (assetBalanceBn < amountBn) throw new Error('Balance too low!')
    const allowance = await trc20Contract
      .allowance(tronW.address!, config.deposit)
      .call({ from: tronW.address! })
    const allowanceBn = BigInt(allowance || 0)
    console.info('allowance:', { allowance, amountBn, assetBalance })
    if (allowanceBn < amountBn) {
      const tx = await tronWeb.transactionBuilder.triggerSmartContract(
        config.asset,
        'approve(address,uint256)',
        {},
        [
          { type: 'address', value: config.deposit },
          { type: 'uint256', value: amountBn.toString() },
        ],
        tronW.address!,
      )
      const { txid } = await tronWeb.trx.sendRawTransaction(
        await tronW.signTransaction(tx.transaction),
      )
      await waitTronTx({ txid, tronWeb })
    }

    const txDeposit = await tronWeb.transactionBuilder.triggerSmartContract(
      config.deposit,
      'deposit(uint256,string)',
      {},
      [
        { type: 'uint256', value: amountBn.toString() },
        { type: 'string', value: email },
      ],
      tronW.address!,
    )
    const sendDeposit = await tronWeb.trx.sendRawTransaction(
      await tronW.signTransaction(txDeposit.transaction),
    )
    const txResult = await waitTronTx({ txid: sendDeposit.txid, tronWeb })
    return txResult.id
  }

  const doDeposit = async (
    amountNum: number,
    email: string,
    w3k: Required<Web3Kit>,
  ) => {
    const netId: CaipNetID = `${w3k.conectType}:${w3k.chainId}`
    const config = Configs[netId]!
    const depositFuns: { [k in ChainType]: DepositFun } = {
      eip155: depositByEip,
      solana: depositBySol,
      tron: depositByTron,
    }
    const amountBn = parseUnits(amountNum.toFixed(6), config.assetDecimals)
    const hashDeposit = await depositFuns[w3k.conectType](
      amountBn,
      email,
      config,
      netId,
    )
    toast.success('Deposit Tx Success')
    return hashDeposit
  }

  const refConfirm = useRef(genPromise<boolean>())
  const [showUInfo, setShowUInfo] = useState<
    UnPromise<typeof getUserInfoBy> | undefined
  >()
  const { mutate: onTopUpNow, isPending: isBusyTopUpNow } = useMutation({
    onError: handleError,
    mutationFn: async () => {
      const w3k = useWeb3Kit.getState()
      if (!w3k.address) throw new Error('Need connected')
      if (!w3k.chainId || !w3k.conectType) throw new Error('Chain error')
      if (!emailOrUID) throw new Error('Email or UID error')
      if (!inputAmount) throw new Error('Need amount!')
      const amount = toNumber(inputAmount)
      if (amount < 1) throw new Error('Require amount >= 1')
      const currentEipChainId = `${eipW.data?.chain.id}`
      console.info('tapupnow:', w3k, currentEipChainId !== w3k.chainId)
      if (
        w3k.conectType == 'eip155' &&
        (!eipW.data || `${eipW.data.chain.id}` !== w3k.chainId)
      ) {
        console.info(
          'switchChainBefore:',
          `${eipW.data?.chain.id}`,
          w3k.chainId,
        )
        await eipNet.switchChainAsync({ chainId: parseInt(w3k.chainId) })
        await new Promise((reslove) => setTimeout(reslove, 2000))
        console.info('switchChainAfter:', `${eipW.data?.chain.id}`, w3k.chainId)
        return setTimeout(() => refTopUpNow.current?.click(), 200)
      }
      let email = emailOrUID
      if (callApi) {
        const uinfo = await getUserInfoBy(emailOrUID, product)
        refConfirm.current = genPromise<boolean>()
        setShowUInfo(uinfo)
        if (await refConfirm.current.promise) {
          email = uinfo.email
        } else {
          email = ''
        }
      }
      if (!email) return
      const netId: CaipNetID = `${w3k.conectType}:${w3k.chainId}`
      const hashDeposit = await doDeposit(amount, email, w3k as any)
      if (callApi) {
        await upDepositHash(hashDeposit, product, netId)
        toast.success('Deposit Finished')
      }
    },
  })

  const blurItemClassName = 'backdrop-blur-md bg-white/40 rounded-full'
  const inputClassName = `backdrop-blur-md bg-white/40 rounded-lg px-4 py-2.5 outline-0`
  return (
    <div>
      {/* Confirm uinfo */}
      <Dialog
        open={Boolean(showUInfo)}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setShowUInfo(undefined)
            refConfirm.current.reslove(false)
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm your info?</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-[1fr_3fr]">
              <Label className="mx-auto">Email</Label>
              <Input disabled type="text" value={showUInfo?.email} />
            </div>
            <div className="grid grid-cols-[1fr_3fr]">
              <Label className="mx-auto">UID</Label>
              <Input disabled type="text" value={showUInfo?.uid} />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Button
              variant="outline"
              className="basis-0 flex-1"
              onClick={() => {
                refConfirm.current.reslove(false)
                setShowUInfo(undefined)
              }}
            >
              Return to modification
            </Button>
            <Button
              className="basis-0 flex-1"
              onClick={() => {
                refConfirm.current.reslove(true)
                setShowUInfo(undefined)
              }}
            >
              Confirm
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="w-full h-auto bg-one flex flex-col justify-center min-h-screen relative pt-32">
        <Header />
        <div
          className={cn(
            'max-w-7xl flex flex-wrap justify-center items-center py-6 gap-x-20 gap-y-10 mx-auto px-5 w-full text-white',
          )}
        >
          <div className="flex-1 flex flex-col items-center gap-5 min-w-[20rem]">
            <div className="text-4xl">Quick Recharge</div>
            <div className="text-base text-center">
              The only officially designated On-Chain recharge channel
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-5 min-w-[20rem] max-w-[35rem]">
            <div className="flex flex-1 flex-col gap-4 p-5 rounded-3xl border border-white backdrop-blur-md ">
              <div className="text-2xl font-semibold text-center">
                Select U3 Products
              </div>
              <div
                className={cn(
                  blurItemClassName,
                  'flex items-center gap-0 relative',
                )}
              >
                <div
                  className={cn(
                    'w-1/2 transition-all absolute h-full rounded-full bg-white',
                    {
                      'left-0': product == 'Card',
                      'left-1/2': product == 'Martin',
                    },
                  )}
                ></div>
                {products.map((item) => (
                  <div
                    key={item}
                    onClick={() => setProduct(item)}
                    className={cn(
                      'z-10 flex-1 cursor-pointer py-2 text-center',
                      { 'text-black': item == product },
                    )}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="text-2xl font-semibold text-center">
                Chose Amount
              </div>
              <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                {amounts.map((item) => (
                  <div
                    key={item}
                    onClick={() => setInputAmount(item + '')}
                    className={cn(
                      'cursor-pointer bg-white/40 hover:bg-white/60 flex flex-nowrap justify-center items-center gap-2 border border-white backdrop-blur-md rounded-lg p-4 text-center ',
                    )}
                  >
                    {item} {'USDT'}
                  </div>
                ))}
              </div>
              <input
                type="text"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value || '')}
                className={inputClassName}
                placeholder="Enter amount >= 1"
              />
              <input
                type="text"
                value={emailOrUID}
                onChange={(e) => setEmailOrUID(e.target.value || '')}
                className={inputClassName}
                placeholder="Enter registered email or UID"
              />
              <div
                ref={refTopUpNow}
                className={cn(
                  'flex items-center justify-center gap-2 cursor-pointer rounded-lg backdrop-blur-md border border-white px-4 py-2.5 text-center hover:bg-amber-500',
                  {
                    'cursor-not-allowed !bg-transparent opacity-60':
                      isBusyTopUpNow,
                  },
                )}
                onClick={() => !isBusyTopUpNow && onTopUpNow()}
              >
                {isBusyTopUpNow && <Loader2Icon className="animate-spin" />}
                TOP UP NOW
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {supportNets.map((item) => (
                <div
                  key={item}
                  className="flex flex-col justify-center items-center gap-2 border border-white backdrop-blur-md rounded-2xl p-3 text-center text-xs"
                >
                  <span className="text-[clamp(12px,3.2vw,20px)] font-semibold">
                    {item}
                  </span>
                  Support
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
