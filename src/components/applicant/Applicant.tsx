import React from 'react'
import type { Applicant as Props } from '../../services/applicant'

// Components
import { Avatar } from './Avatar'

// Styles
import { ApplicantContainer } from './styles'
import { H5, Body1 } from '../shared/typography'
import { Tag } from './Tag'

export function Applicant(applicant: Props) {
  return (
    <ApplicantContainer>
      <Avatar firstName={applicant.firstName} lastName={applicant.lastName} />
      <H5>{`${applicant.firstName} ${applicant.lastName}`}</H5>
      <Body1>{applicant.phoneNumber}</Body1>
      <Body1 style={{ marginBottom: 'var(--space-xs)' }}>
        {applicant.emailAddress}
      </Body1>

      {applicant.appointmentISO && (
        <Tag color="gray">{applicant.appointmentISO}</Tag>
      )}

      {/* {applicant.viewedISO && <Tag color="gray">{applicant.viewedISO}</Tag>} */}

      {applicant.bid && <Tag color="yellow">{applicant.bid}</Tag>}
    </ApplicantContainer>
  )
}
