import React from 'react'
import renderer from 'react-test-renderer'
import { Filter } from '../components/filter'

test('renders correctly', () => {
  const tree = renderer.create(<Filter title="test" />).toJSON()
  expect(tree).toMatchSnapshot()
})
