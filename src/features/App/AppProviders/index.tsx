import { StrictMode } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import LoadingProvider from 'src/contexts/LoadingProvider'

import LoadingWrapper from 'src/features/LoadingWrapper'

import { AppProvidersProps } from 'src/features/App/AppProviders/types.ts'

const queryClient = new QueryClient()

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <LoadingProvider>
          <LoadingWrapper>{children}</LoadingWrapper>
        </LoadingProvider>
      </QueryClientProvider>
    </StrictMode>
  )
}

export default AppProviders
