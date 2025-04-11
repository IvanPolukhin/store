import React from 'react'

import { DataSource, ComponentType } from 'src/types'
import { CardData } from 'src/components/shared/CatalogCard/types.ts'

import { InstagramCards, TelegramCards } from 'src/features/Cards/CardType'

export const componentMap: Record<
  ComponentType,
  React.FC<{ data: CardData[] }>
> = {
  [ComponentType.INSTAGRAM_COMPONENT]: InstagramCards,
  [ComponentType.TELEGRAM_COMPONENT]: TelegramCards,
}

export const getComponentTypeFromSource = (
  source: string | undefined,
): ComponentType | null => {
  if (!source) return null

  switch (source) {
    case DataSource.INSTAGRAM_SOURCE:
      return ComponentType.INSTAGRAM_COMPONENT
    case DataSource.TELEGRAM_SOURCE:
      return ComponentType.TELEGRAM_COMPONENT
    default:
      return null
  }
}
