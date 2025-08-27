import copy from 'copy-to-clipboard'
import { useState } from 'react'
import { toast } from 'sonner'

const useCopy = () => {
  const [isCopied, setIsCopied] = useState(false)
  function copyTextToClipboard(text: string) {
    copy(text)

    setIsCopied(true)

    setTimeout(() => setIsCopied(false), 500)
    toast.success('Copied!')
  }
  return { copyTextToClipboard, isCopied }
}

export default useCopy
