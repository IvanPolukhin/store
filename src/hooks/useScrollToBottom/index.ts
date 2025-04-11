import { useEffect, useRef, useState } from 'react'

const useScrollToBottom = (offset = 100) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false)
  const [isScrollable, setIsScrollable] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      if (containerRef.current) {
        const { scrollHeight, scrollTop, clientHeight } = containerRef.current
        setIsScrolledToBottom(scrollTop + clientHeight >= scrollHeight - offset)
        setIsScrollable(scrollHeight > clientHeight)
      }
    }

    checkScroll()
    containerRef.current?.addEventListener('scroll', checkScroll)
    return () =>
      containerRef.current?.removeEventListener('scroll', checkScroll)
  }, [offset])

  return {
    isScrolledToBottom,
    isScrollable,
    containerRef,
  }
}

export default useScrollToBottom
