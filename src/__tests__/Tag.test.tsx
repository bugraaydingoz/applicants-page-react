import React from 'react'
import renderer from 'react-test-renderer'
import { Tag } from '../components/applicant/Tag'

test('renders correctly', () => {
  const tree = renderer.create(<Tag color="gray">test</Tag>).toJSON()
  expect(tree).toMatchSnapshot()
})
