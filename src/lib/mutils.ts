import { toast } from 'sonner'

export type UnPromise<
  T extends ((...args: any[]) => Promise<any>) | Promise<any>,
> = T extends (...args: any[]) => Promise<infer U>
  ? U
  : T extends Promise<infer M>
    ? M
    : never

export const shortStr = (v?: string, count = 6, endCount = 5) => {
  if (!v) return ''
  if (v.length <= count + endCount) return v
  return `${v.toString().substring(0, count)}...${v.toString().substring(v.length - endCount)}`
}

export function getErrorMsg(error: any) {
  // msg
  let msg = 'Unkown'
  if (typeof error == 'string') msg = error
  else if (typeof error?.msg == 'string') msg = error?.msg
  else if (typeof error?.message == 'string') msg = error?.message
  else if (typeof error?.name == 'string') msg = error?.name
  // replace
  if (msg.includes('User denied') || msg.includes('user rejected transaction'))
    return 'You declined the action in your wallet.'
  if (msg.includes('transaction failed')) return 'Transaction failed'
  return msg
}

export function handleError(error: any) {
  console.error(error)
  toast.error(getErrorMsg(error))
}

export type PromiseStatus = 'pending' | 'fulfilled' | 'rejected'

export function genPromise<T>() {
  let reslove = (_res: T) => {}
  let rejected = (_error?: any) => {}
  let status: PromiseStatus = 'pending'
  let value: T | undefined
  let error: any
  const promise = new Promise<T>((_reslove, _rejected) => {
    reslove = (res) => {
      if (status == 'pending') {
        status = 'fulfilled'
        value = res
        _reslove(res)
      }
    }
    rejected = (err) => {
      if (status == 'pending') {
        status = 'rejected'
        error = err
        _rejected(err)
      }
    }
  })
  return {
    promise,
    reslove,
    rejected,
    getStatus: () => ({ status, value, error }),
  }
}

export function toNumber(value: any, def: number = 0) {
  try {
    const str = typeof value == 'string' ? value : value.toString()
    return parseFloat(str.trim())
  } catch (error) {
    return def
  }
}
