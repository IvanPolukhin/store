import { useContext, createContext } from 'react'

import { LoadingContextData } from 'src/contexts/types'

export const LoadingContext = createContext<LoadingContextData | null>(null)

export const useLoading = (): LoadingContextData => {
  const data = useContext(LoadingContext)

  if (!data) {
    throw new Error('useLoading was used outside of its Provider')
  }

  return data
}
