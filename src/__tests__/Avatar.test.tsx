import React from 'react'
import renderer from 'react-test-renderer'
import { Avatar } from '../components/applicant/Avatar'

jest.mock('../services/utils', () => ({
  random: jest.fn().mockImplementation(() => 0),
}))

test('renders correctly', () => {
  const tree = renderer
    .create(<Avatar firstName="Bugra" lastName="Aydingoz" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
