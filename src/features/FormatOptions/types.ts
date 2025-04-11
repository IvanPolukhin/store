import { Format, PriceItem } from 'src/components/shared/CatalogCard/types.ts'
import { ComponentType } from 'src/types'

export type FormatOptionsProps = {
  formats: Format[]
  selectedFormat: Format[]
  onSelect: (formats: Format[]) => void
  componentType: ComponentType
  selectedPrice?: PriceItem
}
