import React from 'react'
import renderer from 'react-test-renderer'
import { Error } from '../components/error'

test('renders correctly', () => {
  const tree = renderer.create(<Error onClick={jest.fn} />).toJSON()
  expect(tree).toMatchSnapshot()
})
