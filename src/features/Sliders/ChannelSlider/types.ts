import React from 'react'

export type ChannelSliderItem = {
  id: string
  label: string
  icon?: React.ReactNode
  onClick?: () => void
}
