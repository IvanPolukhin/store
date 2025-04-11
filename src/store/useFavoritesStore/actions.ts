import { StateCreator } from 'zustand'
import { FavoritesState } from 'src/store/useFavoritesStore/types.ts'
import { StoreState } from 'src/store/types.ts'

export const createFavoritesSlice: StateCreator<
  StoreState,
  [],
  [],
  FavoritesState
> = (set, get, _store) => ({
  favorites: [],
  addToFavorites: id => {
    const { favorites } = get()
    if (!favorites.includes(id)) {
      set({ favorites: [...favorites, id] })
    }
  },
  removeFromFavorites: id =>
    set(state => ({
      favorites: state.favorites.filter(favId => favId !== id),
    })),
  isInFavorites: id => get().favorites.includes(id),
})
