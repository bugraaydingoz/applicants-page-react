export enum ApplicantStatus {
  New,
  Viewed,
  Appointment,
  Others,
}

export interface Applicant {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  emailAddress: string
  status: ApplicantStatus
  appointmentDate: string | null
  bid: number | null
}
