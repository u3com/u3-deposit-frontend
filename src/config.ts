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
    deposit: 'TEVUcgaaEY13qVPkw5bVZosjfFHQNYHJEpBNakmrmEW',
    asset: 'HDNNJL4haVkH8LGDgRZarqwfjN6jThP4i3yvM1jeYN46',
    assetDecimals: 6,
  },
  [`eip155:${bscTestnet.id}`]: {
    deposit: '0x2b392ce6f74fa9975e129bda6e19d97c95f5c6b4',
    asset: '0xe724278c267eaba42077fda9859a4a607518a2eb',
    assetDecimals: 18,
  },
  [`eip155:${polygonAmoy.id}`]: {
    deposit: '0xf8fd7cf2dff74e9c268caca884b501d142116539',
    asset: '0x5aadfb43ef8daf45dd80f4676345b7676f1d70e3',
    assetDecimals: 18,
  },
  [`tron:3`]: {
    // Tron nile testnet
    deposit: 'TQ4GmNJtH1ic54HcEotRWjUbAac7RiL958',
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
