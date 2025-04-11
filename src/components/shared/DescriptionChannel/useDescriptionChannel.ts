import { useState, useEffect } from 'react'
import { ComponentType } from 'src/types'
import { PriceItem, Price } from 'src/components/shared/CatalogCard/types'

export function useDescriptionChannel(componentType: ComponentType, priceData?: Price) {
  const [selectedPrice, setSelectedPrice] = useState<PriceItem | undefined>(undefined)

  const handlePriceSelect = (price: PriceItem) => {
    setSelectedPrice(price)
  }

  useEffect(() => {
    if (
      componentType === ComponentType.TELEGRAM_COMPONENT &&
      priceData?.type?.length === 1
    ) {
      setSelectedPrice(priceData.type[0])
    }
  }, [componentType, priceData])

  return {
    selectedPrice,
    handlePriceSelect,
  }
}
