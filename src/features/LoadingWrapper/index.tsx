import { useLoading } from 'src/contexts'

import LoadingSpinner from 'src/components/ui/LoadingSpinner'

import { LoadingWrapperProps } from 'src/features/LoadingWrapper/types.ts'

const LoadingWrapper = ({
  children,
  isLoading: localIsLoading,
}: LoadingWrapperProps) => {
  const { isLoading: globalIsLoading } = useLoading()
  const shouldShowLoading =
    localIsLoading !== undefined ? localIsLoading : globalIsLoading

  if (shouldShowLoading) {
    return <LoadingSpinner />
  }

  return <>{children}</>
}

export default LoadingWrapper
