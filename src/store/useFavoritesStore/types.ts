export type FavoritesState = {
  favorites: number[]
  addToFavorites: (id: number) => void
  removeFromFavorites: (id: number) => void
  isInFavorites: (id: number) => boolean
}
