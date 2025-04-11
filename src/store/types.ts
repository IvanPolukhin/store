import { BasketState } from 'src/store/useBasketStore/types'
import { FavoritesState } from 'src/store/useFavoritesStore/types'
import { ProductState } from 'src/store/useProductStore/types'

export type StoreState = BasketState & FavoritesState & ProductState
