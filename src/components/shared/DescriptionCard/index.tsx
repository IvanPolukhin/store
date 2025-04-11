import {
  GenderIcon,
  GoToFavorites,
  ImgIcon,
  InstagramUserIcon,
  InstagramViewerIcon,
  LinkIcon,
  UserIcon,
  ViewerIcon,
} from 'src/icons'

import { useDescriptionCard } from 'src/components/shared/DescriptionCard/useDescriptionCard.ts'
import {
  formatNumberShort,
  getGenderBorderStyle,
} from 'src/components/shared/DescriptionCard/helpers.ts'
import { DescriptionCardProps } from 'src/components/shared/DescriptionCard/types.ts'

import { ComponentType } from 'src/types'

import Button from 'src/components/ui/Button'

const DescriptionCard = ({
  product,
  gender,
  componentType,
}: DescriptionCardProps) => {
  const { displayData, isFavorite, active, handleClick, handleToggleFavorite } =
    useDescriptionCard({
      product,
      gender,
      componentType,
    })

  const genderBorderStyle = getGenderBorderStyle(gender)

  return (
    <div className="bg-card-gradient rounded-3xl overflow-hidden shadow-lg w-full max-w-[500px] flex items-stretch">
      <div className="w-[33%] bg-[#515151] flex items-center justify-center rounded-3xl">
        <div className="w-full aspect-[1/1] flex items-center justify-center">
          {product.view_details?.icon_url &&
          product.view_details?.icon_url !== '-' ? (
            <img
              src={product.view_details?.icon_url}
              alt={product.view_details?.name}
              className="max-w-full max-h-full object-contain rounded-3xl"
            />
          ) : (
            <ImgIcon />
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 px-4 py-4 space-y-3">
        <div className="space-y-1">
          <h3 className="text-base font-medium">
            {product.view_details?.name}
          </h3>

          {componentType === ComponentType.INSTAGRAM_COMPONENT ? (
            <div className="flex space-x-2 items-center">
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={genderBorderStyle}
              >
                <GenderIcon />
              </div>
              <div className="w-10 h-10 border border-[#AE8A64] rounded-full flex flex-col items-center justify-center">
                <InstagramUserIcon />
                <div className="text-[10px] mt-1 leading-tight text-center">
                  {formatNumberShort(displayData.subscribers)}
                </div>
              </div>
              <div className="w-10 h-10 border border-[#AE8A64] rounded-full flex flex-col items-center justify-center">
                <InstagramViewerIcon />
                <div className="text-[10px] mt-1 leading-tight text-center">
                  {formatNumberShort(displayData.views)}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex space-x-4 text-xs">
              <span className="flex items-center space-x-1">
                <UserIcon />
                <span>
                  {displayData.subscribers.toLocaleString().replace(/,/g, ' ')}
                </span>
              </span>
              <span className="flex items-center space-x-1">
                <ViewerIcon />
                <span>
                  {displayData.views.toLocaleString().replace(/,/g, ' ')}
                </span>
              </span>
            </div>
          )}
        </div>
        <Button
          onClick={handleClick}
          className="bg-[#AE8A64] w-full h-[40px] rounded-xl"
        >
          <span className="flex items-center justify-center text-center text-base">
            Перейти
          </span>
        </Button>
      </div>
      <div className="flex flex-col py-4 pr-4 gap-[8px] items-end">
        <Button
          onClick={handleToggleFavorite}
          className="p-2 rounded-full bg-[#7A7A7A33]"
        >
          <GoToFavorites fill={isFavorite ? '#AE8A64' : '#FFF'} />
        </Button>
        <Button
          onClick={handleClick}
          className="p-2 rounded-full bg-[#7A7A7A33]"
        >
          <LinkIcon fill={active ? '#AE8A64' : '#FFF'} />
        </Button>
      </div>
    </div>
  )
}

export default DescriptionCard
