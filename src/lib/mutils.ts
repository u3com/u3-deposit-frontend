import { toast } from 'sonner'

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
