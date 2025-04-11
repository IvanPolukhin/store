import { ViewTypes } from 'src/types'

export type GenderStats = {
  male: number
  female: number
}

export type Format = {
  name: string
  price: number
}

export type BusinessDetails = {
  gender: GenderStats
  formats: Format[]
}

export type ViewDetails = {
  link: string
  name: string
  about: string
  icon_url: string
  username: string
}

export type PriceItem = {
  name: string
  amount: number
}

export type Price = {
  type?: PriceItem[]
}

export type CardData = {
  id: number
  status: string
  category: string
  business_details?: BusinessDetails
  view_details?: ViewDetails
  price: Price
  count_favorites: number
  created_at: string
  subscribers: number
  views: number
  name: string
}

export type CardProps = {
  data: CardData
  view?: ViewTypes
  onAddToCart?: () => void
  onToggleFavorite?: () => void
}

export function createCardData(partial: Partial<CardData>): CardData {
  const rawIconUrl = partial.view_details?.icon_url ?? ''
  const iconUrl = rawIconUrl && rawIconUrl !== '-' ? rawIconUrl : ''

  return {
    id: partial.id ?? 0,
    status: partial.status ?? '',
    category: partial.category ?? '',
    business_details: partial.business_details ?? {
      gender: { male: 0, female: 0 },
      formats: [],
    },
    view_details: partial.view_details ?? {
      link: '',
      name: '',
      about: '',
      icon_url: iconUrl,
      username: '',
    },
    price: partial.price ?? { type: [] },
    count_favorites: partial.count_favorites ?? 0,
    created_at: partial.created_at ?? new Date().toISOString(),
    subscribers: partial.subscribers ?? 0,
    views: partial.views ?? 0,
    name: partial.name ?? '',
  }
}
