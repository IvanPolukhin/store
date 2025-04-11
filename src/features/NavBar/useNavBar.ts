import { useLocation, useParams } from 'react-router-dom'

import useScrollToBottom from 'src/hooks/useScrollToBottom'
import useNavigation from 'src/hooks/useNavigation'

import { DataSource } from 'src/types'

export const useNavBar = () => {
  const location = useLocation()
  const { navigateTo } = useNavigation()
  const { source } = useParams<{ source: string }>()
  const { isScrolledToBottom, isScrollable } = useScrollToBottom(50)

  const isActive = (path: string) => location.pathname === path

  const shouldShow = [
    '/catalog/',
    '/favorites/',
    '/basket/',
    '/description/',
  ].some(path => location.pathname.includes(path))

  const getCurrentSource = () => source || DataSource.INSTAGRAM_SOURCE

  return {
    navigate: navigateTo,
    isActive,
    shouldShow,
    getCurrentSource,
    isScrolledToBottom,
    isScrollable,
  }
}
