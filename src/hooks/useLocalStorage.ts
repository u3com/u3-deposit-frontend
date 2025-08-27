import { useState, useEffect } from 'react'

export function upLocalStorage(key: string, newValue: any) {
  window.localStorage.setItem(key, newValue)

  // 触发自定义事件用于同一页面内的同步
  window.dispatchEvent(
    new CustomEvent(`mStorage-update-${key}`, {
      detail: { newValue },
    }),
  )
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const sessionUpdateEvent = `mStorage-update-${key}`

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key)
        return item
          ? typeof initialValue === 'string'
            ? item
            : JSON.parse(item)
          : initialValue
      }
      return initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)

      if (typeof window !== 'undefined') {
        const newValue =
          typeof valueToStore === 'string'
            ? valueToStore
            : JSON.stringify(valueToStore)

        window.localStorage.setItem(key, newValue)

        // 触发自定义事件用于同一页面内的同步
        window.dispatchEvent(
          new CustomEvent(sessionUpdateEvent, {
            detail: { newValue },
          }),
        )
      }
    } catch (error) {
      console.error(`Error setting sessionStorage key "${key}":`, error)
    }
  }

  useEffect(() => {
    // other page
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue) {
        try {
          setStoredValue(
            typeof initialValue === 'string'
              ? event.newValue
              : JSON.parse(event.newValue),
          )
        } catch (error) {
          console.error(
            `Error parsing sessionStorage value for key "${key}":`,
            error,
          )
        }
      }
    }
    // 处理同一页面内的更新
    const handleLocalUpdate = (event: CustomEvent) => {
      try {
        const newValue = event.detail.newValue
        setStoredValue(
          typeof initialValue === 'string' ? newValue : JSON.parse(newValue),
        )
      } catch (error) {
        console.error(`Error handling local update for key "${key}":`, error)
      }
    }
    window.addEventListener('storage', handleStorageChange)
    window.addEventListener(
      sessionUpdateEvent,
      handleLocalUpdate as EventListener,
    )

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener(
        sessionUpdateEvent,
        handleLocalUpdate as EventListener,
      )
    }
  }, [key, initialValue, sessionUpdateEvent])

  return [storedValue, setValue] as const
}
