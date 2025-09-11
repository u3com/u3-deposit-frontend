import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const qClient = new QueryClient()

// eip155 rainbowkit wagmi view
import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { bsc, bscTestnet, polygon, polygonAmoy, type Chain } from 'viem/chains'
import { useAccount, WagmiProvider } from 'wagmi'

export const eipNetworks: [Chain, ...Chain[]] = [
  bsc,
  bscTestnet,
  polygon,
  polygonAmoy,
]
const config = getDefaultConfig({
  appName: 'U3',
  projectId: 'f6ed428863bd8b38d7f11d356f800195',
  chains: eipNetworks,
  ssr: false, // If your dApp uses server side rendering (SSR)
})

// Tron adapters for Tron
import {
  WalletProvider as TronWalletProvider,
  useWallet as useTronWallet,
} from '@tronweb3/tronwallet-adapter-react-hooks'
import { WalletModalProvider as TronWalletModalProvider } from '@tronweb3/tronwallet-adapter-react-ui'
import '@tronweb3/tronwallet-adapter-react-ui/style.css'
import {
  BinanceWalletAdapter,
  OkxWalletAdapter,
  TronLinkAdapter,
} from '@tronweb3/tronwallet-adapters'
import { clearWeb3Kit, useWeb3Kit } from './Web3Kit'

const adapters = [
  new TronLinkAdapter(),
  new OkxWalletAdapter(),
  new BinanceWalletAdapter(),
]
// Solana
import {
  defEipChainId,
  defSolChainId,
  defTronChainId,
  LocalKeys,
  type ChainType
} from '@/config'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import {
  WalletProvider as SolWalletProvider,
  useWallet as useSolWallet
} from '@solana/wallet-adapter-react'
import { WalletModalProvider as SolWalletModalProvider } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css'
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import { useEffect, useRef } from 'react'

const solWallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()]

function useUpW3KOnStat(
  type: ChainType,
  connected: boolean,
  address?: string | null,
  chainId?: string,
) {
  const ref = useRef(connected)
  useEffect(() => {
    if (!ref.current && connected) {
      if (address) {
        useWeb3Kit.setState({ conectType: type, address })
      } else {
        return () => { }
      }
    }
    if (ref.current && !connected) {
      clearWeb3Kit()
    }
    if (connected && address && !useWeb3Kit.getState().conectType) {
      useWeb3Kit.setState({ conectType: type, address })
    }
    if (connected && useWeb3Kit.getState().chainId !== chainId) {
      useWeb3Kit.setState({ chainId })
    }
    ref.current = connected
  }, [address, connected, chainId])
}
function OnWalletStats() {
  const conTron = useTronWallet()
  const [tronChainId] = useLocalStorage(LocalKeys.tron, defTronChainId)
  useUpW3KOnStat('tron', conTron.connected, conTron.address, tronChainId)
  const conEip = useAccount()
  const [eipChainId] = useLocalStorage(LocalKeys.eip155, defEipChainId)
  useUpW3KOnStat('eip155', conEip.isConnected, conEip.address, eipChainId)
  const conSol = useSolWallet()
  const [solChainId] = useLocalStorage(LocalKeys.solana, defSolChainId)
  useUpW3KOnStat(
    'solana',
    conSol.connected,
    conSol.publicKey?.toString(),
    solChainId,
  )
  console.info(
    'onStats:',
    `tron:${tronChainId}`,
    `eip155:${eipChainId}`,
    `sol:${solChainId}`,
  )
  return null
}
export function Providers({ children }: { children: React.ReactNode }) {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={qClient}>
        <RainbowKitProvider theme={darkTheme()} modalSize="compact" locale="en">
          <TronWalletProvider disableAutoConnectOnLoad adapters={adapters}>
            <TronWalletModalProvider>
                <SolWalletProvider wallets={solWallets} autoConnect>
                  <SolWalletModalProvider>
                    <OnWalletStats />
                    {children}
                  </SolWalletModalProvider>
                </SolWalletProvider>
            </TronWalletModalProvider>
          </TronWalletProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
