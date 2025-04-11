import { StateCreator } from 'zustand'

import { ProductState } from 'src/store/useProductStore/types.ts'
import { StoreState } from 'src/store/types.ts'

export const createProductSlice: StateCreator<
  StoreState,
  [],
  [],
  ProductState
> = (set, get, _store) => ({
  currentProductId: null,
  products: [],
  setCurrentProductId: id => set({ currentProductId: id }),
  getCurrentProduct: () => {
    const { currentProductId, products } = get()
    return currentProductId === null
      ? null
      : products.find(product => product.id === currentProductId) || null
  },
  setProducts: products => set({ products }),
})
