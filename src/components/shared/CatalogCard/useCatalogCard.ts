import { useCardActions } from 'src/hooks/useCardActions'

import { useStore } from 'src/store'

import { CardProps } from 'src/components/shared/CatalogCard/types.ts'
import { createCardData } from 'src/components/shared/CatalogCard/types.ts'

export const useCatalogCard = ({ data, onToggleFavorite }: CardProps) => {
  const { goToDescription, toggleFavorite } = useCardActions()
  const isFavorite = useStore().isInFavorites(data.id)
  const normalizedData = createCardData(data)

  return {
    displayData: normalizedData,
    isFavorite,
    handleGoToDescription: () => goToDescription(data),
    handleToggleFavorite: () => toggleFavorite(data, onToggleFavorite),
  }
}
