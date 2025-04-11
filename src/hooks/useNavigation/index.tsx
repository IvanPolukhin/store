import { useLocation, useNavigate } from 'react-router-dom'

import { RoutesPath } from 'src/types'

const useNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navigateTo = (path: RoutesPath): void => {
    navigate(path)
  }

  return {
    navigateTo,
    activeRoute: location.pathname as RoutesPath,
  }
}

export default useNavigation
