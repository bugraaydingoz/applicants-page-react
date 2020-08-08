export enum ApplicantStatus {
  New,
  Viewed,
  Appointment,
  Others,
}

export interface Applicant {
  firstName: string
  lastName: string
  phoneNumber: string
  emailAddress: string
  status: ApplicantStatus
  appointmentISO: string | null
  viewedISO: string | null
  bid: number
}
