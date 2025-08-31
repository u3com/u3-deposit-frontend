import Header from '@/components/Header'
import { useWeb3Kit } from '@/components/Web3Kit'
import { Configs, NetInfos, type CaipNetID } from '@/config'
import { isProd } from '@/env'
import idlU3Deposit from '@/json/u3_deposit.json'
import { handleError } from '@/lib/mutils'
import { waitTronTx } from '@/lib/tron'
import { cn } from '@/lib/utils'
import { type U3Deposit } from '@/types/u3_deposit'
import { AnchorProvider, BN, Program, setProvider } from '@coral-xyz/anchor'
import {
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID
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
import { erc20Abi, parseAbi, parseUnits, type Address, type Hex } from 'viem'
import { usePublicClient, useSwitchChain, useWalletClient } from 'wagmi'

export const Route = createFileRoute('/')({
  component: App,
})

const products = ['Card', 'Martin'] as const
const amounts = [50, 100, 500, 1000]
const supportNets = ['TRC20', 'BSC', 'Solana', 'Polygon'] as const
const callApi = isProd

function App() {
  const [product, setProduct] = useState<(typeof products)[number]>(products[0])
  const [amount, setAmount] = useState(amounts[0])
  const [emailOrUID, setEmailOrUID] = useState('')
  const [emailOrUIDConfirm, setEmailOrUIDConfirm] = useState('')
  const eipNet = useSwitchChain()
  const eipW = useWalletClient()
  const eipPC = usePublicClient()
  const solW = useAnchorWallet()
  const solConn = useSolConn()
  const tronW = useWallet()
  const refTopUpNow = useRef<HTMLDivElement>(null)
  const { mutate: onTopUpNow, isPending: isBusyTopUpNow } = useMutation({
    onError: handleError,
    mutationFn: async () => {
      const w3k = useWeb3Kit.getState()
      if (!w3k.address) throw new Error('Need connected')
      if (!w3k.chainId || !w3k.conectType) throw new Error('Chain error')
      if (!emailOrUID || emailOrUID !== emailOrUIDConfirm)
        throw new Error('Email or UID error')
      const currentEipChainId = `${eipW.data?.chain.id}`
      console.info('tapupnow:', w3k, currentEipChainId !== w3k.chainId)
      if (
        w3k.conectType == 'eip155' &&
        eipW.data &&
        `${eipW.data.chain.id}` !== w3k.chainId
      ) {
        console.info('switchChainBefore:', `${eipW.data.chain.id}`, w3k.chainId)
        await eipNet.switchChainAsync({ chainId: parseInt(w3k.chainId) })
        await new Promise((reslove) => setTimeout(reslove, 2000))
        console.info('switchChainAfter:', `${eipW.data.chain.id}`, w3k.chainId)
        return refTopUpNow.current?.click()
      }

      const isEmail = () => {
        const emailRegex =
          /\w[-.\w]*@[-a-z0-9]+(\.[-a-z0-9]+)*\.(com|cn|edu|uk)/gi
        return emailRegex.test(emailOrUID)
      }
      let email = emailOrUID

      if (callApi) {
        const { code, data } = await fetch(
          'https://dsbscsol.u3.com/api/index/userQuery',
          {
            method: 'GET',
            body: JSON.stringify({
              system: product.toLowerCase(),
              ...(isEmail() ? { email: emailOrUID } : { uid: emailOrUID }),
            }),
          },
        )
          .then((res) => res.json())
          .then(
            (res) =>
              res as { code: number; data: { email: string; uid: string } },
          )
        if (code !== 1) throw new Error(`Not found user by ${emailOrUID}`)
        email = data.email
      }
      const netId: CaipNetID = `${w3k.conectType}:${w3k.chainId}`
      const config = Configs[netId]
      if (!config) return
      let hashDeposit: string
      switch (w3k.conectType) {
        case 'eip155': {
          console.info('provider:', eipW.data, config)
          if (!eipW.data || !eipPC) return
          const amountBn = parseUnits(amount + '', config.assetDecimals)
          const user = eipW.data.account.address;
          const deposit = config.deposit as Address
          const asset = config.asset as Address
          const chainId = await eipPC.getChainId()
          const allownce = await eipPC.readContract({ abi: erc20Abi, functionName: 'allowance', address: asset, args: [user, deposit] })
          console.info('eipCheck', { chainId, allownce, user })
          if (allownce < amountBn) {
            const simuApprove = await eipPC.simulateContract({
              account: user,
              abi: erc20Abi, functionName: 'approve', address: asset, args: [deposit, amountBn],
            })
            console.info('simuRes:', simuApprove.result, simuApprove.request)
            const hashApprove = await eipW.data.writeContract({ ...simuApprove.request, account: user })
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
            address: config.deposit as Address,
            args: [amountBn, email],
          })
          hashDeposit = await eipW.data.writeContract({ ...simuDeposit.request, account: user })
          const receiptDeposit = await eipPC.waitForTransactionReceipt({
            hash: hashDeposit as Hex,
          })
          if (receiptDeposit.status !== 'success')
            throw new Error(`Deposit Error: ${receiptDeposit.status}`)
          break
        }
        case 'solana': {
          if (!solW) return
          console.info(
            'sol wallet:',
            solW.publicKey.toString(),
            solW,
            idlU3Deposit,
          )
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
              Buffer.from('user_deposit'),
              solW.publicKey.toBuffer(),
              depositPool.toBuffer(),
            ],
            program.programId,
          )

          // Get or create user USDT account
          const userUsdtAccount = await getAssociatedTokenAddress(usdtMint, solW.publicKey)
          // Get or create recipient USDT account
          const recipientUsdtAccount = await getAssociatedTokenAddress(usdtMint, recipient)
          const amountBN = new BN(amount * 10 ** config.assetDecimals)
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
          hashDeposit = await provider.sendAndConfirm(tx)
          console.info('solana:', hashDeposit)
          break
        }
        case 'tron': {
          console.info('tron wallet:', tronW)
          const amountBn = parseUnits(amount + '', config.assetDecimals)
          const tronWeb = new TronWeb({ fullHost: NetInfos[netId].rpc! })
          const trc20Contract = tronWeb.contract(erc20Abi, config.asset)
          const allowance = await trc20Contract
            .allowance(tronW.address!, config.deposit)
            .call({ from: tronW.address! })
          const assetBalance = await trc20Contract.balanceOf(tronW.address!).call({ from: tronW.address! })
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

          const txDeposit =
            await tronWeb.transactionBuilder.triggerSmartContract(
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
          hashDeposit = txResult.id
          break
        }
      }
      toast.success('Deposit Tx Success')

      if (callApi) {
        const upApiRes = await fetch(
          'https://dsbscsol.u3.com/api/index/topUpNow',
          {
            method: 'POST',
            body: JSON.stringify({
              system: product.toLowerCase(),
              chain: netId,
              hash: hashDeposit,
            }),
          },
        )
          .then((res) => res.json())
          .then((res) => res as { code: number })
        if (upApiRes.code == 0) throw new Error('Deposit Api Failed')
        toast.success('Deposit Finished')
      }
    },
  })

  const blurItemClassName = 'backdrop-blur-md bg-white/40 rounded-full'
  const inputClassName = `backdrop-blur-md bg-white/40 rounded-lg px-4 py-2.5 outline-0`
  return (
    <div>
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
                    onClick={() => setAmount(item)}
                    className={cn(
                      'cursor-pointer bg-white/40 flex flex-nowrap justify-center items-center gap-2 border border-white backdrop-blur-md rounded-lg p-4 text-center',
                      { 'bg-white text-black': item == amount },
                    )}
                  >
                    {item} {'USDT'}
                  </div>
                ))}
              </div>
              <input
                type="text"
                value={emailOrUID}
                onChange={(e) => setEmailOrUID(e.target.value || '')}
                className={inputClassName}
                placeholder="Enter registered email or UID"
              />
              <input
                type="text"
                value={emailOrUIDConfirm}
                onChange={(e) => setEmailOrUIDConfirm(e.target.value || '')}
                className={inputClassName}
                placeholder="Confirm registered email or UID"
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
