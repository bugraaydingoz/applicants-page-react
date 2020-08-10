import React, { useState } from 'react'

// Components
import { ReactComponent as SearchIcon } from '../shared/icons/search.svg'

// Hooks
import { useUrlQuery } from '../../hooks/useUrlQuery'

// Styles
import { SearchContainer, Input } from './styles'

export function Search() {
  const [urlQuery, setUrlQuery] = useUrlQuery()
  const [search, setSearch] = useState(urlQuery.search || '')
  return (
    <SearchContainer>
      <SearchIcon />
      <Input
        type="text"
        placeholder="Search for applicant"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && setUrlQuery({ search })}
      />
    </SearchContainer>
  )
}
