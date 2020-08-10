import React from 'react'
import renderer from 'react-test-renderer'
import { ApplicantList } from '../components/applicant'
import { ApplicantStatus } from '../services/applicant'

const applicant = {
  id: 'test-id',
  firstName: 'Anja',
  lastName: 'Frühling',
  phoneNumber: '+49 146 344 23811',
  emailAddress: 'anja.fruhling@gmail.com',
  status: ApplicantStatus.Viewed,
  appointmentDate: '2020-07-02T23:02:00.661Z',
  bid: 400000,
}

test('renders correctly', () => {
  const tree = renderer
    .create(<ApplicantList title="applicants" applicants={[applicant]} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
