import { useState, useRef, useEffect, useCallback } from 'react'

export const useGenericSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = useCallback(
    (index: number) => {
      if (containerRef.current) {
        const child = containerRef.current.children[index] as HTMLElement
        if (child) {
          containerRef.current.scrollTo({
            left: child.offsetLeft - containerRef.current.offsetLeft,
            behavior: 'smooth',
          })
          setActiveIndex(index)
        }
      }
    },
    [setActiveIndex],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let startX = 0
    let scrollLeft = 0

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      scrollLeft = container.scrollLeft
    }

    const handleTouchMove = (e: TouchEvent) => {
      const moveX = e.touches[0].clientX
      container.scrollLeft = scrollLeft - (moveX - startX)
    }

    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchmove', handleTouchMove)

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return {
    activeIndex,
    containerRef,
    scrollToIndex,
  }
}
