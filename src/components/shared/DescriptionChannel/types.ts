import { Price, PriceItem } from 'src/components/shared/CatalogCard/types.ts'
import { ComponentType } from 'src/types'

export type DescriptionChannelProps = {
  componentType: ComponentType
  priceData?: Price
  selectedPrice?: PriceItem
  onSelectPrice: (price: PriceItem) => void
  type?: PriceItem[]
}
