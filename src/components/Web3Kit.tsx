import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { shortStr } from '@/lib/mutils'
import { useWallet as useSolKit } from '@solana/wallet-adapter-react'
import { useWalletModal as useSolModal } from '@solana/wallet-adapter-react-ui'
import { useMutation } from '@tanstack/react-query'
import { useWallet as useTronKit } from '@tronweb3/tronwallet-adapter-react-hooks'
import { useWalletModal as useTronWalletModal } from '@tronweb3/tronwallet-adapter-react-ui'
import { useConnectModal as useEipKit } from '@rainbow-me/rainbowkit'
import { useMemo, useState } from 'react'
import { create } from 'zustand/react'
import { Button } from './ui/button'
import {
  Configs,
  LocalKeys,
  NetInfos,
  type CaipNetID,
  type ChainType,
} from '@/config'
import useCopy from '@/hooks/useCopy'
import Avatar from 'boring-avatars'
import { useDisconnect as useEipDis } from 'wagmi'
import { upLocalStorage } from '@/hooks/useLocalStorage'

export type Web3Kit = {
  conectType?: ChainType
  address?: string
  chainId?: string
}

export const useWeb3Kit = create<Web3Kit>(() => ({}))
;(window as any).__w3k = useWeb3Kit
export function clearWeb3Kit() {
  useWeb3Kit.setState({
    conectType: undefined,
    address: undefined,
    chainId: undefined,
  })
  Object.keys(LocalKeys).forEach((key) =>
    localStorage.removeItem(LocalKeys[key as ChainType]),
  )
}

export function ConnectBtn() {
  const w3k = useWeb3Kit()
  const [open, setOpen] = useState(false)
  const [openAcc, setOpenAcc] = useState(false)
  const tronWM = useTronWalletModal()
  const eipKit = useEipKit()
  const solM = useSolModal()
  const onSelectChain = (netId: CaipNetID) => {
    const [chainType, chainId] = netId.split(':') as [ChainType, string]
    switch (chainType) {
      case 'tron':
        tronWM.setVisible(true)
        break
      case 'eip155':
        eipKit.openConnectModal?.()
        break
      case 'solana':
        solM.setVisible(true)
        break
    }
    useWeb3Kit.setState({ chainId })
    upLocalStorage(LocalKeys[chainType], chainId)
    setOpen(false)
  }
  const onClick = () => {
    if (!w3k.address) {
      setOpen(true)
    } else {
      setOpenAcc(true)
    }
  }
  const eipDis = useEipDis()
  const tronKit = useTronKit()
  const solKit = useSolKit()
  const { mutate: onDis, isPending: busyDis } = useMutation({
    mutationFn: async () => {
      if (w3k.conectType == 'tron') {
        await tronKit.disconnect()
      } else if (w3k.conectType == 'eip155') {
        await eipDis.disconnectAsync()
      } else if (w3k.conectType == 'solana') {
        await solKit.disconnect()
      }
      setOpenAcc(false)
    },
  })
  const caipNets = useMemo(
    () =>
      Object.keys(Configs).map((item) => ({
        netId: item as CaipNetID,
        ...NetInfos[item as CaipNetID],
      })),
    [],
  )
  const { copyTextToClipboard } = useCopy()
  const currentNet = caipNets.find(
    (item) => item.netId === `${w3k.conectType}:${w3k.chainId}`,
  )
  return (
    <>
      <div
        onClick={onClick}
        className="cursor-pointer px-5 py-3 rounded bg-amber-500 hover:bg-yellow-500 transition-all"
      >
        {w3k.address ? shortStr(w3k.address) || '---' : 'Connect'}
      </div>
      {/* Select Chain type */}
      <Dialog open={open} onOpenChange={(isOpen) => !isOpen && setOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Chose chain type?</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            {caipNets.map((item) => (
              <Button
                key={item.netId}
                onClick={() => onSelectChain(item.netId)}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      {/* Account modal */}
      <Dialog
        open={openAcc}
        onOpenChange={(isOpen) => !isOpen && setOpenAcc(false)}
      >
        <DialogContent className="max-w-[20rem] md:max-w-[22.5rem]">
          <DialogHeader className="gap-5">
            <DialogTitle>Account</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 py-5">
            <Avatar
              size={80}
              name={w3k.address!}
              colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
            />
            <div className="text-center">{shortStr(w3k.address)}</div>
          </div>
          {currentNet && (
            <div className="text-center my-2">Chain: {currentNet.name}</div>
          )}
          <div className="grid grid-cols-2 gap-5 ">
            <Button
              className="text-lg"
              onClick={() => copyTextToClipboard(w3k.address!)}
            >
              Copy Address
            </Button>
            <Button className="text-lg" busy={busyDis} onClick={onDis as any}>
              Disconnect
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
