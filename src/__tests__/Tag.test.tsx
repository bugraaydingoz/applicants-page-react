import React from 'react'
import renderer from 'react-test-renderer'
import { Tag } from '../components/applicant/Tag'

test('renders correctly', () => {
  const tree = renderer
    .create(<Tag type="appointment" value={new Date(0).toISOString()} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
