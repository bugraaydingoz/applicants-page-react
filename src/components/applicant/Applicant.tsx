import React from 'react'
import { format } from 'date-fns'
import {
  Applicant as ApplicantType,
  ApplicantStatus,
} from '../../services/applicant'

// Components
import { Avatar } from './Avatar'

// Styles
import { ApplicantContainer } from './styles'
import { H5, Body1 } from '../shared/typography'
import { Tag } from './Tag'

export function Applicant(applicant: ApplicantType) {
  return (
    <ApplicantContainer>
      <Avatar firstName={applicant.firstName} lastName={applicant.lastName} />
      <H5>{`${applicant.firstName} ${applicant.lastName}`}</H5>
      <Body1>{applicant.phoneNumber}</Body1>
      <Body1 style={{ marginBottom: 'var(--space-xs)' }}>
        {applicant.emailAddress}
      </Body1>

      {applicant.appointmentDate && (
        <Tag color="gray">{formatDate(applicant)}</Tag>
      )}

      {applicant.bid && <Tag color="yellow">{formatMoney(applicant.bid)}</Tag>}
    </ApplicantContainer>
  )
}

function formatDate(applicant: ApplicantType): string {
  const title =
    applicant.status === ApplicantStatus.Appointment ? 'Appointment' : 'Viewed'
  const date = format(new Date(applicant.appointmentDate ?? 0), 'dd MMMM HH:mm')
  return `${title} ${date}`
}

function formatMoney(money: number): string {
  const formatter = new Intl.NumberFormat('de-DE', { currency: 'EUR' })
  return `BID ${formatter.format(money)}€`
}
