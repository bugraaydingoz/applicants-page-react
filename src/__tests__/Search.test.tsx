import React from 'react'
import renderer from 'react-test-renderer'
import { Search } from '../components/search'

jest.mock('../hooks/useUrlQuery', () => ({
  useUrlQuery: jest.fn().mockImplementation(() => [{}, jest.fn()]),
}))

test('renders correctly', () => {
  const tree = renderer.create(<Search />).toJSON()
  expect(tree).toMatchSnapshot()
})
