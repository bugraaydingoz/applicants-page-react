import React from 'react'

// Components
import { ReactComponent as DownIcon } from '../shared/icons/arrow-down.svg'

// Styles
import { FilterContainer } from './styles'
import { Body2 } from '../shared/typography'

interface Props {
  title: string
}

export function Filter({ title }: Props) {
  return (
    <FilterContainer>
      <Body2 style={{ marginRight: '4px' }}>{title}</Body2>
      <DownIcon />
    </FilterContainer>
  )
}
