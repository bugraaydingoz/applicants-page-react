import React from 'react'
import { useTranslation } from 'react-i18next'
import { format } from 'date-fns'
import { Applicant as ApplicantType, Status } from '../../services/applicant'

// Components
import { Avatar } from './Avatar'

// Styles
import { ApplicantContainer } from './styles'
import { H5, Body1 } from '../shared/typography'
import { Tag } from './Tag'

export const Applicant = React.memo((applicant: ApplicantType) => {
  const { t } = useTranslation()
  function formatDate(applicant: ApplicantType): string {
    const title =
      applicant.status === Status.Appointment
        ? t('stats.appointment')
        : t('stats.viewed')

    const date = format(
      new Date(applicant.appointmentDate ?? 0),
      'dd MMMM HH:mm'
    )

    return `${title} ${date}`
  }

  function formatMoney(money: number): string {
    const formatter = new Intl.NumberFormat('de-DE', { currency: 'EUR' })
    return `${t('bid')} ${formatter.format(money)}€`
  }

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
})
