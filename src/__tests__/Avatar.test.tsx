import React from 'react'
import renderer from 'react-test-renderer'
import { Avatar } from '../components/applicant/Avatar'

test('renders correctly', () => {
  const tree = renderer
    .create(<Avatar firstName="Bugra" lastName="Aydingoz" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
