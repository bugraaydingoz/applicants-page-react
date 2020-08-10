export enum Status {
  Appointment = 'Appointment_Set',
  Viewed = 'Property_Viewed',
  Interested = 'Interested',
  Accepted = 'Offer_Accepted',
}

// export type StatusStrings = keyof typeof Status

export interface Applicant {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  emailAddress: string
  status: Status
  appointmentDate: string | null
  bid: number | null
}
