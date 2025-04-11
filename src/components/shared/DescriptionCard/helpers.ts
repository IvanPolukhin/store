import React from 'react'

import { GenderStats } from 'src/components/shared/CatalogCard/types.ts'

export const formatNumberShort = (num: number) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B'
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return num
}

export const getGenderBorderStyle = (
  gender?: GenderStats,
): React.CSSProperties => {
  const totalGender = (gender?.male || 0) + (gender?.female || 0)
  const malePercentage =
    totalGender > 0 ? (gender!.male / totalGender) * 100 : 50

  return {
    border: `2px solid transparent`,
    borderRadius: '50%',
    background: `linear-gradient(#333, #333) padding-box, linear-gradient(90deg, #6662FC ${malePercentage}%, #FF3CE0 ${malePercentage}%) border-box`,
  }
}
