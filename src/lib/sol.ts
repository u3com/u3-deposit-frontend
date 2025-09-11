import type { Connection } from '@solana/web3.js'

export async function waitSolTxConfirmed(
  con: Connection,
  txid: string,
  timeout = 60_000,
): Promise<boolean> {
  const start = Date.now()
  while (Date.now() - start < timeout) {
    const statusResp = await con.getSignatureStatus(txid, {
      searchTransactionHistory: true,
    })
    const status = statusResp.value
    if (status) {
      if (status.err === null && status.confirmationStatus !== 'processed')
        return true
      else return false
    }
    await new Promise((r) => setTimeout(r, 2000))
  }
  throw new Error('Timeout: Transaction not confirmed')
}
