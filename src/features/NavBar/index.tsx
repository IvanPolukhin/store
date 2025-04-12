import { useNavBar } from 'src/features/NavBar/useNavBar.ts'

import { RoutesPath } from 'src/types'

import { CatalogIcon, FavoriteIcon, BasketIcon } from 'src/icons'

import Button from 'src/components/ui/Button'

const NavBar = () => {
  const {
    navigate,
    isActive,
    shouldShow,
    getCurrentSource,
    isScrolledToBottom,
    isScrollable,
  } = useNavBar()

  if (!shouldShow) return null

  const currentSource = getCurrentSource()

  return (
    <>
      <div className="h-[100px] w-full"></div>

      <div
        className={`fixed left-0 right-0 mx-auto max-w-[460px] w-[90%] rounded-2xl 
        bg-[rgba(34,34,35,0.3)] backdrop-blur-md transition-all duration-300 z-50
         ${isScrolledToBottom ? 'bottom-4' : isScrollable ? 'bottom-8' : 'bottom-4'}
        `}
      >
        <div className="flex justify-around items-center py-4">
          <Button
            onClick={() =>
              navigate(
                RoutesPath.FAVORITES.replace(
                  ':source',
                  currentSource,
                ) as RoutesPath,
              )
            }
            className="flex flex-col items-center mt-1"
          >
            <FavoriteIcon
              fill={isActive(RoutesPath.FAVORITES) ? '#FFF' : '#AE8A64'}
            />
            <span
              className={`text-xs mt-1 ${isActive(RoutesPath.FAVORITES) ? 'text-white' : 'text-[#AE8A64]'}`}
            >
              Закладки
            </span>
          </Button>
          <Button
            onClick={() =>
              navigate(
                RoutesPath.CATALOG.replace(
                  ':source',
                  currentSource,
                ) as RoutesPath,
              )
            }
            className="w-12 h-12 rounded-full bg-[#AE8A64] flex items-center justify-center"
          >
            <CatalogIcon />
          </Button>
          <Button
            onClick={() =>
              navigate(
                RoutesPath.BASKET.replace(
                  ':source',
                  currentSource,
                ) as RoutesPath,
              )
            }
            className="flex flex-col items-center"
          >
            <BasketIcon
              fill={isActive(RoutesPath.BASKET) ? '#FFF' : '#AE8A64'}
            />
            <span
              className={`text-xs mt-1 ${isActive(RoutesPath.BASKET) ? 'text-white' : 'text-[#AE8A64]'}`}
            >
              Корзина
            </span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default NavBar
