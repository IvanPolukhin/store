import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getComponentTypeFromSource } from 'src/helpers/sourcing'

import { useStore } from 'src/store'

import { useCardActions } from 'src/hooks/useCardActions'

import { ComponentType } from 'src/types'
import { Format } from 'src/components/shared/CatalogCard/types.ts'
import { useDescriptionChannel } from 'src/components/shared/DescriptionChannel/useDescriptionChannel.ts'

const useDescription = (source?: string) => {
  const { source: paramSource } = useParams<{ source: string }>()
  const effectiveSource = source || paramSource

  const { addToCart } = useCardActions()

  const getComponentType = (): ComponentType | null =>
    getComponentTypeFromSource(effectiveSource)
  const componentType = getComponentType()

  const { id } = useParams<{ id: string }>()
  const setCurrentProductId = useStore(state => state.setCurrentProductId)
  const getCurrentProduct = useStore(state => state.getCurrentProduct)

  const [selectedFormat, setSelectedFormat] = useState<Format[]>([])

  useEffect(() => {
    if (id) setCurrentProductId(Number(id))
  }, [id, setCurrentProductId])

  const product = getCurrentProduct()
  const formats = product?.business_details?.formats || []
  const gender = product?.business_details?.gender ?? { male: 0, female: 0 }
  const { selectedPrice, handlePriceSelect } = useDescriptionChannel(
    componentType!,
    product?.price,
  )

  useEffect(() => {
    if (componentType === ComponentType.TELEGRAM_COMPONENT && formats.length) {
      setSelectedFormat([formats[0]])
    }
  }, [componentType, formats])

  const handleSelectFormat = (formats: Format[]) => {
    setSelectedFormat(formats)
  }

  const handleAddToCart = () => {
    if (!product || selectedFormat.length === 0) return

    const priceItem = product.price?.type?.[0]
    if (!priceItem) return

    addToCart(product, priceItem, selectedFormat)
    console.log('Корзина:', useStore.getState().basket)
  }

  return {
    product,
    formats,
    gender,
    selectedFormat,
    selectedPrice,
    handlePriceSelect,
    handleSelectFormat,
    handleAddToCart,
    componentType: componentType!,
  }
}

export default useDescription
