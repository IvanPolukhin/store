import { useCardActions } from 'src/hooks/useCardActions'

import { useStore } from 'src/store'

import { DescriptionCardProps } from 'src/components/shared/DescriptionCard/types.ts'
import { createCardData } from 'src/components/shared/CatalogCard/types.ts'
import { useState } from 'react'

export const useDescriptionCard = ({ product }: DescriptionCardProps) => {
  const { toggleFavorite } = useCardActions()
  const isFavorite = useStore().isInFavorites(product.id)
  const normalizedData = createCardData(product)
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(prev => !prev)
  }

  return {
    displayData: normalizedData,
    isFavorite,
    active,
    handleClick,
    handleToggleFavorite: () => toggleFavorite(product),
  }
}
