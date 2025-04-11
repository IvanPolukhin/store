import { CardData } from 'src/components/shared/CatalogCard/types.ts'

export type ProductState = {
  currentProductId: number | null;
  products: CardData[];
  setCurrentProductId: (id: number) => void;
  getCurrentProduct: () => CardData | null;
  setProducts: (products: CardData[]) => void;
}
