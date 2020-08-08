import React from 'react'

// Styles
import { StatContainer } from './styles'
import { H4, Body2 } from '../shared/typography'

interface Props {
  title: string
  value: number
}

export function Stat({ title, value }: Props) {
  return (
    <StatContainer>
      <H4>{value}</H4>
      <Body2>{title}</Body2>
    </StatContainer>
  )
}
