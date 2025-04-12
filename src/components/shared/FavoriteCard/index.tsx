import {
  GoToDescription,
  ImgIcon,
  ViewerIcon,
  UserIcon,
  FavoriteGoToBasket,
} from 'src/icons'
import { formatNumberShort } from 'src/components/shared/DescriptionCard/helpers'
import useFavoriteCard from './useFavoriteCard'
import { FavoriteCardProps } from 'src/components/shared/FavoriteCard/types.ts'
import Button from 'src/components/ui/Button'

const FavoriteCard = ({ product, id }: FavoriteCardProps) => {
  const { handleAddToCart, handleGoToDescription } = useFavoriteCard(
    id,
    product,
  )
  const { view_details } = product || {}

  return (
    product && (
      <div className="bg-card-gradient rounded-3xl overflow-hidden shadow-lg w-full flex items-center">
        <div className="w-[25%] h-[100px] bg-[#515151] flex items-center justify-center rounded-3xl">
          {view_details?.icon_url && view_details.icon_url !== '-' ? (
            <img
              src={view_details.icon_url}
              alt={view_details.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <ImgIcon />
          )}
        </div>
        <div className="flex-1 flex flex-col justify-between p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-base font-semibold truncate max-w-[70%]">
              {view_details?.name}
            </h3>
            <Button
              onClick={handleAddToCart}
              className="w-8 h-8 rounded-full bg-[#7A7A7A33] active:bg-[#AE8A64] flex items-center justify-center transition-colors"
            >
              <FavoriteGoToBasket />
            </Button>
          </div>
          <div className="flex items-center space-x-4 text-xs mb-1">
            <span className="flex items-center space-x-1">
              <UserIcon />
              <span>{formatNumberShort(product.subscribers)}</span>
            </span>
            <span className="flex items-center space-x-1">
              <ViewerIcon />
              <span>{formatNumberShort(product.views)}</span>
            </span>
          </div>
          <div className="text-xs flex">
            <div className="inline-flex items-center space-x-2 w-full min-w-0">
              <span className="truncate">
                {view_details?.about || 'No description'}
              </span>
              <Button className="flex-shrink-0" onClick={handleGoToDescription}>
                <GoToDescription />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default FavoriteCard
