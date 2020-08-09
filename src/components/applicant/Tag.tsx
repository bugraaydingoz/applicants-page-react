import React from 'react'

// Styles
import { TagContainer } from './styles'

interface Props {
  color: 'gray' | 'yellow'
  children: React.ReactNode
}

export function Tag({ color, children }: Props) {
  return <TagContainer color={color}>{children}</TagContainer>
}
