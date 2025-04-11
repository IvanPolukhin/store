import { CardProps } from 'src/components/shared/CatalogCard/types.ts'
import Button from 'src/components/ui/Button'

import { UserIcon, ViewerIcon, ImgIcon } from 'src/icons'
import { GoToFavorites, GoToDescription } from 'src/icons'

import { useCatalogCard } from 'src/components/shared/CatalogCard/useCatalogCard.ts'

const CatalogCard = ({ data, onAddToCart, onToggleFavorite }: CardProps) => {
  const {
    displayData,
    isFavorite,
    handleToggleFavorite,
    handleGoToDescription,
  } = useCatalogCard({
    data,
    onAddToCart,
    onToggleFavorite,
  })

  return (
    <div className="bg-card-gradient rounded-3xl overflow-hidden shadow-lg p-4 max-w-[250px] w-full">
      <div className="flex flex-col min-[340px]:flex-row items-start min-[340px]:items-center gap-1 min-[350px]:space-x-2 mb-3">
        <div className="w-16 h-16 bg-[#515151] rounded-2xl flex items-center justify-center flex-shrink-0">
          {displayData.view_details?.icon_url &&
          displayData.view_details?.icon_url !== '-' ? (
            <img
              src={displayData.view_details?.icon_url}
              alt="Icon"
              className="w-full h-full rounded-2xl object-cover"
            />
          ) : (
            <ImgIcon />
          )}
        </div>
        <div className="flex flex-col">
          <h3 className="line-clamp-2 text-[12px] min-[340px]:text-[12px] min-[400px]:text-base leading-tight break-words mt-2 min-[340px]:mt-0">
            {displayData.view_details?.name || 'No Name'}
          </h3>
        </div>
      </div>

      <div className="flex space-x-3 text-[10px] min-[400px]:text-xs">
        <span className="flex items-center space-x-1">
          <UserIcon />
          <span>{displayData.subscribers.toLocaleString()}</span>
        </span>
        <span className="flex items-center space-x-1">
          <ViewerIcon />
          <span>{displayData.views.toLocaleString()}</span>
        </span>
      </div>

      <div className="text-xs flex mt-2">
        <div className="inline-flex items-center space-x-2 w-full min-w-0">
          <span className="truncate">
            {displayData.view_details?.about || 'No description'}
          </span>
          <Button className="flex-shrink-0" onClick={handleGoToDescription}>
            <GoToDescription />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Button
          onClick={handleGoToDescription}
          className="border border-[#AE8A64] bg-[#AE8A64] w-[125px] h-[40px] rounded-xl transition active:opacity-70"
        >
          <span className="flex items-center justify-center text-center text-base">
            Перейти
          </span>
        </Button>

        <Button
          onClick={handleToggleFavorite}
          className="ml-2 p-3 rounded-full bg-[#7A7A7A1A]"
        >
          <GoToFavorites fill={isFavorite ? '#AE8A64' : '#FFF'} />
        </Button>
      </div>
    </div>
  )
}

export default CatalogCard
