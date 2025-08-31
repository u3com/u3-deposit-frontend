import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { clusterApiUrl } from '@solana/web3.js'
import { bsc, bscTestnet, polygon, polygonAmoy } from 'viem/chains'
import { isTest } from './env'
// import { solana } from '@reown/appkit/networks'
export type ChainType = 'eip155' | 'solana' | 'tron'
export type CaipNetID = `${ChainType}:${string}`
export const Configs: {
  [k: CaipNetID]:
    | { deposit: string; asset: string; assetDecimals: number }
    | undefined
} = {
  [`solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1`]: {
    deposit: '9LtzaxYQeVt3z4yHTfPS11FQJDPs9qsUFbwUJNTR4gUx',
    asset: 'HbbW1Erfgfu8nM5Y7P4BruviWGkPy5P8oKEKVnCgwwpm',
    assetDecimals: 6,
  },
  [`eip155:${bscTestnet.id}`]: {
    deposit: '0x2b392ce6f74fa9975e129bda6e19d97c95f5c6b4',
    asset: '0xe724278c267eaba42077fda9859a4a607518a2eb',
    assetDecimals: 18,
  },
  [`eip155:${polygonAmoy.id}`]: {
    deposit: '0xeea1026a8080eece2963b44b27edcd4d42361fe1',
    asset: '0x6e6bc20df92459f2fbcc54fa67afefb057400936',
    assetDecimals: 18,
  },
  [`tron:3`]: {
    // Tron nile testnet
    deposit: 'TKANa2o4wCUXELXEuh27sznnUUkzh6pSZk',
    asset: 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf',
    assetDecimals: 6,
  },
}

export const NetInfos: {
  [k: CaipNetID]: { name: string; rpc?: string }
} = {
  [`solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1`]: {
    name: 'Solana Devnet',
    rpc: clusterApiUrl(WalletAdapterNetwork.Devnet),
  },
  [`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`]: {
    name: 'Solana',
    rpc: clusterApiUrl(WalletAdapterNetwork.Mainnet),
  },
  [`eip155:${bscTestnet.id}`]: { name: bscTestnet.name },
  [`eip155:${bsc.id}`]: { name: bsc.name },
  [`eip155:${polygonAmoy.id}`]: { name: polygonAmoy.name },
  [`eip155:${polygon.id}`]: { name: polygon.name },
  [`tron:3`]: { name: 'Tron Nile', rpc: 'https://nile.trongrid.io' },
  [`tron:1`]: { name: 'Tron', rpc: 'https://api.trongrid.io' },
}

export const defTronChainId = isTest ? '3' : '1'
export const defSolChainId = isTest
  ? 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1'
  : '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp'
export const defEipChainId = isTest ? `${bscTestnet.id}` : `${bsc.id}`

export const LocalKeys: { [k in ChainType]: string } = {
  tron: '__lastTronChainId',
  eip155: '__lastEipChainId',
  solana: '__lastSolChainId',
}
