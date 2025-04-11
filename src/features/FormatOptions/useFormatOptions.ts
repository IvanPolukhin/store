import { useState, useCallback, useEffect } from 'react'

import { Format, PriceItem } from 'src/components/shared/CatalogCard/types.ts'

import { ComponentType } from 'src/types'

const useFormatOptions = (
  selectedFormat: Format[],
  onSelect: (formats: Format[]) => void,
  componentType: ComponentType,
  selectedPrice?: PriceItem,
) => {
  const [selected, setSelected] = useState<Format[]>(selectedFormat)
  const [displayPrice, setDisplayPrice] = useState(0)

  const safeComponentType = componentType ?? ComponentType.TELEGRAM_COMPONENT

  const handleSelect = useCallback(
    (format: Format) => {
      const newSelected = [format]
      setSelected(newSelected)
      onSelect(newSelected)
    },
    [onSelect],
  )

  const handleToggleSelection = useCallback(
    (format: Format) => {
      setSelected(prevSelected => {
        const isSelected = prevSelected.some(f => f.name === format.name)
        const newSelected = isSelected
          ? prevSelected.filter(f => f.name !== format.name)
          : [...prevSelected, format]
        onSelect(newSelected)
        return newSelected
      })
    },
    [onSelect],
  )

  useEffect(() => {
    if (selectedFormat.length) {
      setSelected(selectedFormat)
    }
  }, [selectedFormat])

  useEffect(() => {
    const basePrice = selectedPrice?.amount || 0
    const formatsPrice = selected.reduce((sum, format) => sum + format.price, 0)

    setDisplayPrice(basePrice + formatsPrice)
  }, [selected, selectedPrice])

  return {
    selected,
    safeComponentType,
    handleSelect,
    handleToggleSelection,
    displayPrice,
  }
}

export default useFormatOptions
