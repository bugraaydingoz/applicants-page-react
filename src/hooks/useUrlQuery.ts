import { useLocation, useHistory } from 'react-router'

export interface UrlQuery {
  [key: string]: string
  search: string
  minBid: string
  maxBid: string
}

export interface UrlQueryValues {
  search: string | null
  minBid: number | null
  maxBid: number | null
}

export function useUrlQuery() {
  const location = useLocation()
  const history = useHistory()
  const query = new URLSearchParams(location.search)

  function setUrlQuery(newQuery: UrlQuery) {
    for (const q in newQuery) {
      const value = newQuery[q]
      if (value === null || value === undefined) {
        continue
      }
      query.set(q, value)
    }

    history.push({ ...location, search: `?${query.toString()}` })
  }

  const values: any = {}
  query.forEach((val, key) => (values[key] = val))
  return [values, setUrlQuery]
}
