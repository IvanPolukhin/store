import { useMemo, useState } from 'react'

import { LoadingContext } from 'src/contexts'

import { LoadingContextData } from 'src/contexts/types'

const LoadingProvider = ({ ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const loadingContextData: LoadingContextData = useMemo(
    () => ({
      isLoading,
      startLoading: () => setIsLoading(true),
      stopLoading: () => setIsLoading(false),
      setLoading: (loading: boolean) => setIsLoading(loading),
    }),
    [isLoading],
  )

  return <LoadingContext.Provider value={loadingContextData} {...props} />
}

export default LoadingProvider
