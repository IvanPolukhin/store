import React from 'react'

export type ButtonProps = {
  children?: React.ReactNode
  className?: string
  icon?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}
