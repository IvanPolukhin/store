import { useParams } from 'react-router-dom'
import { useStore } from 'src/store'
import { componentMap } from 'src/helpers/sourcing'
import { getComponentTypeFromSource } from 'src/helpers/sourcing'

export const useFavorites = (source?: string) => {
  const { source: paramSource } = useParams<{ source: string }>()
  const effectiveSource = source || paramSource

  const componentType = getComponentTypeFromSource(effectiveSource)

  const favoritesIds = useStore(state => state.favorites)
  const products = useStore(state => state.products)

  const favorites = products.filter(product =>
    favoritesIds.includes(product.id),
  )

  const Component = componentType ? componentMap[componentType] : null

  return {
    favorites,
    componentType,
    Component,
  }
}
