import { useStore } from 'src/store'
import { useCardActions } from 'src/hooks/useCardActions'
import { CardData } from 'src/components/shared/CatalogCard/types'

const useFavoriteCard = (id?: number, productFromProps?: CardData) => {
  const { goToDescription, addToCart, toggleFavorite } = useCardActions()

  const productFromStore = useStore(state =>
    id ? state.products.find(p => p.id === id) : undefined,
  )

  const product = productFromProps || productFromStore

  const handleGoToDescription = () => {
    if (product) {
      goToDescription(product)
    }
  }

  const handleAddToCart = () => {
    if (product) {
      const priceItem = product.price?.type?.[0]
      if (!priceItem) return

      addToCart(product, priceItem, [])
    }
  }

  const handleToggleFavorite = () => {
    if (product) {
      toggleFavorite(product)
    }
  }

  return {
    product,
    handleGoToDescription,
    handleAddToCart,
    handleToggleFavorite,
  }
}

export default useFavoriteCard
