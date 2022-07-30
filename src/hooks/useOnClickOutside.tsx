import React from 'react'

type Handler = (event: Event) => void
type Event = MouseEvent | TouchEvent

export function useOnClickOutside<T extends Element>(ref: React.RefObject<T>, handler: Handler) {
  React.useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event?.target as Node)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
