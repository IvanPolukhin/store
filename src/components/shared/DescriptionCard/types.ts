import { CardData, GenderStats } from 'src/components/shared/CatalogCard/types.ts'
import { ComponentType } from 'src/types'

export type DescriptionCardProps = {
  product: CardData
  gender: GenderStats
  componentType: ComponentType

}
