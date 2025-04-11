import React from 'react'

export type SliderItem = {
  id: string
  label: string
  icon?: React.ReactNode
  onClick?: () => void
}
