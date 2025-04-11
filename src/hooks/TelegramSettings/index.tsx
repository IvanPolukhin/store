import { useEffect } from 'react'

import WebApp from '@twa-dev/sdk'

const TelegramSettings = () => {
  useEffect(() => {
    WebApp.setHeaderColor('#0A0A0A')
    WebApp.setBackgroundColor('#0A0A0A')
    WebApp.disableVerticalSwipes()
  }, [])

  return null
}

export default TelegramSettings
