import React from 'react'
import renderer from 'react-test-renderer'
import { Stats } from '../components/stat'

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Stats total={25} new={10} viewed={5} appointment={5} others={10} />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
