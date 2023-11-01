import { useEffect, useState } from "react"

export const useStorage = ({key, defValue}) => {

  const getStorageKeyValue = (key, defValue) => {
    const rawValue = localStorage.getItem(key)
    const value = typeof rawValue == Object ? JSON.parse(rawValue) : rawValue
    return value || defValue || ''
  }
  const [value, setValue] = useState(
    getStorageKeyValue(key, defValue)
  )

  useEffect(() => {
    localStorage.setItem(key, value)

    const interval = setInterval(() => {
      const keyValue = getStorageKeyValue(key, defValue)
      if(keyValue != value) setValue(keyValue)
    }, 150);

    return () => {
      clearInterval(interval)
    }
  }, [key, value, defValue])

  return [value, setValue]
}
