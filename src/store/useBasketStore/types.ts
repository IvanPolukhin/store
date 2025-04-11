export type BasketItem = {
  id: number
  formatName: string
  quantity: number
  totalPrice: number
}

export type BasketState = {
  basket: BasketItem[]
  addToBasket: (item: BasketItem) => void
  removeFromBasket: (id: number) => void
  updateQuantity: (id: number, updater: (prev: number) => number) => void
  isInBasket: (id: number) => boolean
}
