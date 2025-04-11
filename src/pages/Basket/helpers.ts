import { useMemo } from 'react'

import { useStore } from 'src/store'

const basket = useStore(state => state.basket)

export const totalPrice = useMemo(() => {
  return basket.reduce((sum, item) => sum + item.quantity * item.totalPrice, 0)
}, [basket])
