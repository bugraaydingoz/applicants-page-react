import React from 'react'
import renderer from 'react-test-renderer'
import { NoResult } from '../components/no-result'

test('renders correctly', () => {
  const tree = renderer.create(<NoResult onClick={jest.fn} />).toJSON()
  expect(tree).toMatchSnapshot()
})
