import { StateCreator } from 'zustand'

import { StoreState } from 'src/store/types.ts'
import { BasketState, BasketItem } from 'src/store/useBasketStore/types.ts'

export const createBasketSlice: StateCreator<
  StoreState,
  [],
  [],
  BasketState
> = (set, get, _store) => ({
  basket: [],
  addToBasket: (item: BasketItem) =>
    set(state => {
      const existingItem = state.basket.find(p => p.id === item.id)

      if (existingItem) {
        return {
          basket: state.basket.map(p =>
            p.id === item.id
              ? { ...p, quantity: p.quantity + item.quantity }
              : p,
          ),
        }
      }

      return {
        basket: [...state.basket, item],
      }
    }),

  removeFromBasket: id =>
    set(state => ({
      basket: state.basket.filter(item => item.id !== id),
    })),

  updateQuantity: (id, updater) =>
    set(state => ({
      basket: state.basket.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, updater(item.quantity)),
            }
          : item,
      ),
    })),

  isInBasket: id => get().basket.some(item => item.id === id),
})
