import { createRoot } from 'react-dom/client'

import 'src/index.css'

import AppProviders from 'src/features/App/AppProviders'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <App />
  </AppProviders>,
)
