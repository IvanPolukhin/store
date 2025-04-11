export type LoadingContextData = {
  isLoading: boolean
  startLoading: () => void
  stopLoading: () => void
  setLoading: (loading: boolean) => void
}
