import CatalogCard from 'src/components/shared/CatalogCard'

import { CardsProps } from './types.ts'

const Cards = ({ data, source }: CardsProps) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4">
        {data
          .filter(item => item.category === source)
          .map(item => (
            <CatalogCard key={item.id} data={item} />
          ))}
      </div>
    </div>
  )
}

export default Cards
