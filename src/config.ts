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

  [`eip155:${bsc.id}`]: {
    deposit: '0x6b75df507dfeadeb86727e994d948993f9f23f9b',
    asset: '0x55d398326f99059fF775485246999027B3197955',
    assetDecimals: 18,
  },
  [`eip155:${polygon.id}`]: {
    deposit: '0x6b75df507dfeadeb86727e994d948993f9f23f9b',
    asset: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    assetDecimals: 6,
  },
  [`tron:1`]: {
    deposit: 'TKwwpJMdf5Vcze7eBHKyfSNzkikUjV6BHy',
    asset: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    assetDecimals: 6,
  },
  [`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`]: {
    deposit: 'AEiASqmA6Ddrew1nh4UdPaUXdz4WUEqY7MkF8jcPTdp6',
    asset: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
    assetDecimals: 6,
  },
}

export const NetInfos: {
  [k: CaipNetID]: { name: string; rpc?: string; isTest?: boolean }
} = {
  [`solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1`]: {
    name: 'Solana Devnet',
    rpc: 'https://devnet.helius-rpc.com/?api-key=9046f5e8-6fae-47e7-b2bc-c8b8beb9eda1',
    isTest: true,
  },
  [`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`]: {
    name: 'Solana',
    rpc: 'https://mainnet.helius-rpc.com/?api-key=9046f5e8-6fae-47e7-b2bc-c8b8beb9eda1',
  },
  [`eip155:${bscTestnet.id}`]: { name: bscTestnet.name, isTest: true },
  [`eip155:${bsc.id}`]: { name: bsc.name },
  [`eip155:${polygonAmoy.id}`]: { name: polygonAmoy.name, isTest: true },
  [`eip155:${polygon.id}`]: { name: polygon.name },
  [`tron:3`]: {
    name: 'Tron Nile',
    rpc: 'https://nile.trongrid.io',
    isTest: true,
  },
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

/*

BSC
U3Deposit
https://bscscan.com/address/0x6b75df507dfeadeb86727e994d948993f9f23f9b
USDT
https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955
Admin (管理员)
0x4161723911aB6cfe4Cd0Dbb6B89cDaFdaBE09AA3
Recipient (收款地址)
0x9d888374F5dbaaAFda8B0a8F65AcE45A1E91D982

Polygon
U3Deposit
https://polygonscan.com/address/0x6b75df507dfeadeb86727e994d948993f9f23f9b
USDT
https://polygonscan.com/address/0xc2132D05D31c914a87C6611C10748AEb04B58e8F
Admin (管理员)
0x4161723911aB6cfe4Cd0Dbb6B89cDaFdaBE09AA3
Recipient (收款地址)
0x3cDfAd5cb5D39D7A32A6243df6f10D59CeC4bc6e

TRON
U3Deposit
https://tronscan.io/#/contract/TKwwpJMdf5Vcze7eBHKyfSNzkikUjV6BHy
USDT
https://tronscan.io/#/contract/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t
Admin (管理员)
TFvufCzFaCMsf3QMocxR692WP1YUQyGEhw
Recipient (收款地址)
TWfRexbdoZ2QK7xskkU1c9HWQBUoJMQG7h

Solana
U3Deposit
https://explorer.solana.com/address/EKxafeWX9P6QeDo61gvRftMp8bdEJkphfbH9DfVaTm4j
USDT
https://explorer.solana.com/address/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB
Admin (管理员)
2WiXFbhwjhfUy1iURVxkTxMbSwwMfPA3KHRJJ3gX8o2z
Recipient (收款地址)
CXrdNApwny4s379SK3KzAxB8JwYH6ZFN2Bxqn9YRXok8
*/
