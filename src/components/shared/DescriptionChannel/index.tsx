import { Checkbox } from '@mui/material'

import { DescriptionChannelProps } from 'src/components/shared/DescriptionChannel/types.ts'

import { ComponentType } from 'src/types'

const DescriptionChannel = ({
  componentType,
  priceData,
  selectedPrice,
  onSelectPrice,
}: DescriptionChannelProps) => {
  return (
    <div className="mt-6">
      <h2 className="text-[14px] mb-2 uppercase font-unbounded">
        {componentType === ComponentType.TELEGRAM_COMPONENT
          ? 'Описание канала'
          : 'Основные'}
      </h2>

      {componentType === ComponentType.TELEGRAM_COMPONENT ? (
        <>
          <p className="mb-2">Добро пожаловать в интернет!</p>
          <p className="mb-2">
            Реклама: <span className="text-[#AE8A64]">@senyatret</span>
          </p>
          <p className="mb-2">
            Биржа:{' '}
            <a
              href="https://telega.in/c/mudak"
              className="text-[#AE8A64] no-underline"
            >
              https://telega.in/c/mudak
            </a>
          </p>
          <p className="mb-2">
            MDK PREMIUM:{' '}
            <a
              href="https://telega.in/c/mudak"
              className="text-[#AE8A64] no-underline"
            >
              https://telega.in/c/mudak
            </a>
          </p>
          <p className="mb-2">
            РКН:{' '}
            <a
              href="https://telega.in/c/mudak"
              className="text-[#AE8A64] no-underline"
            >
              https://telega.in/c/mudak
            </a>
          </p>
        </>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-4">
            {priceData?.type?.map(price => (
              <div key={price.name} className="flex items-center">
                <Checkbox
                  checked={selectedPrice?.name === price.name}
                  onChange={() => onSelectPrice(price)}
                  sx={{
                    color: '#AE8A64',
                    '&.Mui-checked': {
                      color: '#AE8A64',
                    },
                  }}
                />
                <span className="text-[#AE8A64] text-lg">{price.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DescriptionChannel
