import AppRoutes from 'src/features/App/AppRoutes'

import TelegramSettings from 'src/hooks/TelegramSettings'

const App = () => {
  return (
    <>
      <TelegramSettings />
      <AppRoutes />
    </>
  )
}

export default App
