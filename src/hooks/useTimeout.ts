import { useRef } from 'react'

export const useTimeout = (func: (...args: any[]) => any, delay: number) => {
  const time = useRef(null)

  const fn = (...args) => {
    if (time.current) {
      clearTimeout(time.current)
    }
    time.current = setTimeout(() => func(...args), delay)
  }

  return { fn, time }
}
