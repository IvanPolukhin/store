import webApp from '@twa-dev/sdk'

import { useEffect } from 'react'

import { BackArrowProps } from 'src/components/ui/BackButton/types.ts'

import { RoutesPath } from 'src/types'

import useNavigation from 'src/hooks/useNavigation'

const BackButton = ({ to = RoutesPath.MENU }: BackArrowProps) => {
  const { navigateTo, activeRoute } = useNavigation()
  const shouldShow = activeRoute !== RoutesPath.MENU

  useEffect(() => {
    if (shouldShow) {
      webApp.BackButton.show()
      webApp.BackButton.onClick(() => navigateTo(to as RoutesPath))

      return () => {
        webApp.BackButton.hide()
      }
    }
  }, [navigateTo, shouldShow, to])

  return null
}

export default BackButton
