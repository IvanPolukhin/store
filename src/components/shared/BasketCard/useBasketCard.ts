import { useCardActions } from 'src/hooks/useCardActions'

export const useBasketCard = (productId: number) => {
  const { getBasketCardActions } = useCardActions()
  const { onRemove, onIncrement, onDecrement } = getBasketCardActions(productId)

  return {
    onRemove,
    onIncrement,
    onDecrement,
  }
}
