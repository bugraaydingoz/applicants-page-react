import React from 'react'
import renderer from 'react-test-renderer'
import { Applicant } from '../components/applicant'
import { ApplicantStatus } from '../services/applicant'

const applicant = {
  firstName: 'Anja',
  lastName: 'Frühling',
  phoneNumber: '+49 146 344 23811',
  emailAddress: 'anja.fruhling@gmail.com',
  status: ApplicantStatus.Viewed,
  appointmentISO: '2020-07-02T23:02:00.661Z',
  viewedISO: '2020-07-02T23:02:00.661Z',
  bid: 400000,
}

test('renders correctly', () => {
  const tree = renderer.create(<Applicant {...applicant} />).toJSON()
  expect(tree).toMatchSnapshot()
})
