import { ImgIcon, ViewerIcon, UserIcon } from 'src/icons'
import { formatNumberShort } from 'src/components/shared/DescriptionCard/helpers'
import { BasketCardProps } from 'src/components/shared/BasketCard/types.ts'
import Button from 'src/components/ui/Button'
import { useBasketCard } from 'src/components/shared/BasketCard/useBasketCard.ts'

const BasketCard = ({ product, formatName, quantity }: BasketCardProps) => {
  const { onRemove, onIncrement, onDecrement } = useBasketCard(product.id)

  const { view_details } = product

  if (!product) return null

  return (
    <div className="bg-card-gradient rounded-3xl overflow-hidden shadow-lg w-full flex items-stretch">
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
      <div className="flex flex-col justify-between flex-1 px-4 py-3">
        <div className="space-y-1">
          <h3 className="text-base font-medium truncate">
            {view_details?.name}
          </h3>
          <span className="bg-[#AE8A64] px-2 py-0.5 rounded-full text-xs w-fit">
            {formatName}
          </span>
        </div>
        <div className="flex space-x-4 text-xs pt-2">
          <span className="flex items-center space-x-1">
            <UserIcon />
            <span>{formatNumberShort(product.subscribers)}</span>
          </span>
          <span className="flex items-center space-x-1">
            <ViewerIcon />
            <span>{formatNumberShort(product.views)}</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between py-4 pr-4 gap-2">
        <Button
          onClick={onRemove}
          className="w-8 h-8 rounded-full bg-[#7A7A7A33] hover:bg-[#AE8A64] transition-colors"
        >
          ✕
        </Button>
        <div className="flex items-center space-x-2">
          <Button
            onClick={onDecrement}
            className="w-6 h-6 rounded-full bg-[#7A7A7A33] hover:bg-[#AE8A64]"
            disabled={quantity <= 1}
          >
            –
          </Button>
          <span className="text-sm">{quantity}</span>
          <Button
            onClick={onIncrement}
            className="w-6 h-6 rounded-full bg-[#7A7A7A33] hover:bg-[#AE8A64]"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BasketCard
