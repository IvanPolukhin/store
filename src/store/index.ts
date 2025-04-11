import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { StoreState } from 'src/store/types.ts'

import { createBasketSlice } from 'src/store/useBasketStore/actions.ts'
import { createFavoritesSlice } from 'src/store/useFavoritesStore/actions.ts'
import { createProductSlice } from 'src/store/useProductStore/actions.ts'

export const useStore = create<StoreState>()(
  persist(
    (set, get, api) => ({
      ...createBasketSlice(set, get, api),
      ...createFavoritesSlice(set, get, api),
      ...createProductSlice(set, get, api),
    }),
    {
      name: 'app-storage',
      partialize: state => ({
        basket: state.basket,
        favorites: state.favorites,
      }),
    },
  ),
)
