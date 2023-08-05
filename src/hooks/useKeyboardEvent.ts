import { useEffect } from 'react'

export function useKeyboardEvent(callback: (event: KeyboardEvent) => void) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      callback(event)
    }

    window.addEventListener('keypress', handler)

    return () => {
      window.removeEventListener('keypress', handler)
    }
  }, [callback])
}
