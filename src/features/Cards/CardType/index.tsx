import { CardSource } from 'src/types'
import { CardData } from 'src/components/shared/CatalogCard/types.ts'
import Cards from 'src/components/shared/Cards'

export const InstagramCards = ({ data }: { data: CardData[] }) => {
  return <Cards data={data} source={CardSource.INSTAGRAM} />
}

export const TelegramCards = ({ data }: { data: CardData[] }) => {
  return <Cards data={data} source={CardSource.TELEGRAM} />
}
