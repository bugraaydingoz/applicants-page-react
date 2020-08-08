import { Applicant, ApplicantStatus } from './types'

export const applicants: Applicant[] = [
  {
    firstName: 'Friedrich',
    lastName: 'Heinrich',
    phoneNumber: '+49 146 344 23811',
    emailAddress: 'friedrich.heinrich@gmail.com',
    status: ApplicantStatus.New,
    appointmentISO: null,
    viewedISO: null,
    bid: -1,
  },
]
