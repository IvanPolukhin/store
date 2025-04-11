import { CardData } from 'src/components/shared/CatalogCard/types.ts'
import { ComponentType } from 'src/types'

export type FavoriteCardProps = {
  product: CardData
  componentType: ComponentType
  id: number
}
