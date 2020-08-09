import React from 'react'

// Styles
import { AvatarContainer } from './styles'
import { H5 } from '../shared/typography'

const colors = [
  // Purple
  {
    light: '#E3E7F9',
    dark: '#405493',
  },

  // Blue
  {
    light: '#CEF0F4',
    dark: '#20ADC5',
  },

  // Yellow-ish
  {
    light: '#F0F4E1',
    dark: '#ACAF36',
  },

  // Orange
  {
    light: '#FEE8D3',
    dark: '#E97428',
  },

  // Red
  {
    light: '#FCD6DE',
    dark: '#E52A50',
  },
]

interface Props {
  firstName: string
  lastName: string
}

export function Avatar({ firstName, lastName }: Props) {
  const random = () => Math.floor(Math.random() * colors.length - 1) + 1
  const color = colors[random()]
  const initials = `${firstName[0]}${lastName[0]}`
  return (
    <AvatarContainer color={color.light}>
      <H5 color={color.dark}>{initials}</H5>
    </AvatarContainer>
  )
}
