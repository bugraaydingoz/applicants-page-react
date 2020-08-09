import React, { useState } from 'react'

// Components
import { ReactComponent as SearchIcon } from '../shared/icons/search.svg'

// Styles
import { SearchContainer, Input } from './styles'

export function Search() {
  const [search, setSearch] = useState('')
  return (
    <SearchContainer>
      <SearchIcon />
      <Input
        type="text"
        placeholder="Search for applicant"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchContainer>
  )
}
