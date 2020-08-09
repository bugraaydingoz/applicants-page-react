import React from 'react'
import renderer from 'react-test-renderer'
import { Stat } from '../components/stat'

test('renders correctly', () => {
  const tree = renderer.create(<Stat title="title" value={50} />).toJSON()
  expect(tree).toMatchSnapshot()
})
