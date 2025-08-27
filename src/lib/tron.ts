import type { TronWeb } from '@tronweb3/tronwallet-abstract-adapter'

export async function waitTronTx({
  txid,
  tronWeb,
  maxAttempts = 30,
}: {
  tronWeb: TronWeb
  txid: string
  maxAttempts?: number
}) {
  console.log(`Waiting for confirmation: ${txid}`)
  for (let i = 0; i < maxAttempts; i++) {
    const result = await tronWeb.trx
      .getTransactionInfo(txid)
      .catch(() => undefined)
    console.info('tron result:', result)
    if (result && result.blockNumber && result.receipt.result == 'SUCCESS') {
      console.log(`Transaction confirmed in block: ${result.blockNumber}`)
      return result
    }
    if (result && result.result) {
      throw new Error(`Transaction ${result.result} : ${result.receipt.result}`)
    }
    await new Promise((resolve) => setTimeout(resolve, 3000)) // Wait 3 seconds
  }
  throw new Error(`Transaction confirmation timeout: ${txid}`)
}
