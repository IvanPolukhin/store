import { generatePath } from 'react-router-dom'

import useNavigation from 'src/hooks/useNavigation'
import { useStore } from 'src/store'
import { RoutesPath } from 'src/types'
import {
  CardData,
  Format,
  PriceItem,
} from 'src/components/shared/CatalogCard/types.ts'

export const useCardActions = () => {
  const {
    addToFavorites,
    removeFromFavorites,
    setCurrentProductId,
    isInFavorites,
    removeFromBasket,
    updateQuantity,
  } = useStore()

  const { navigateTo } = useNavigation()

  const goToDescription = (data: CardData) => {
    setCurrentProductId(data.id)
    navigateTo(
      generatePath(RoutesPath.DESCRIPTION, {
        source: data.category,
        id: String(data.id),
      }) as RoutesPath,
    )
  }

  const addToCart = (
    product: CardData,
    priceItem: PriceItem,
    selectedFormats: Format[] = [],
  ) => {
    const totalFormatsPrice = selectedFormats.reduce(
      (sum, f) => sum + f.price,
      0,
    )
    const totalPrice = priceItem.amount + totalFormatsPrice

    useStore.getState().addToBasket({
      id: product.id,
      formatName: priceItem.name,
      totalPrice,
      quantity: 1,
    })
  }

  const toggleFavorite = (data: CardData, onToggleFavorite?: () => void) => {
    const inFavorite = isInFavorites(data.id)
    inFavorite ? removeFromFavorites(data.id) : addToFavorites(data.id)

    onToggleFavorite?.()
  }

  const getBasketCardActions = (productId: number) => {
    const onRemove = () => {
      removeFromBasket(productId)
    }

    const onIncrement = () => {
      updateQuantity(productId, prev => prev + 1)
    }

    const onDecrement = () => {
      updateQuantity(productId, prev => Math.max(1, prev - 1))
    }

    return {
      onRemove,
      onIncrement,
      onDecrement,
    }
  }

  return {
    goToDescription,
    addToCart,
    toggleFavorite,
    getBasketCardActions,
  }
}
