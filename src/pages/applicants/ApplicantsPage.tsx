import React from 'react'
import { useTranslation } from 'react-i18next'
import { useViewport } from '../../hooks/useViewport'

import {
  ApplicantStatus,
  Applicant as ApplicantType,
} from '../../services/applicant'

// Components
import { ReactComponent as BackIcon } from '../../components/shared/icons/back.svg'
import { Stat } from '../../components/stat'
import { Search } from '../../components/search'
import { Filter } from '../../components/filter'
import { Applicant } from '../../components/applicant'

// Styles
import {
  PageContainer,
  Navigation,
  Left,
  Right,
  Filters,
  Row,
  Applicants,
} from './styles'
import { H4, H3 } from '../../components/shared/typography'

export function ApplicantsPage() {
  const { t } = useTranslation()
  const { width } = useViewport()
  const isMobile = width < 768

  const applicant = {
    id: '2e24a396-80e5-4ca6-9a8b-28b63f567204',
    firstName: 'Anja',
    lastName: 'Frühling',
    phoneNumber: '+49 146 344 23811',
    emailAddress: 'anja.fruhling@gmail.com',
    status: ApplicantStatus.Viewed,
    appointmentISO: '2020-07-02T23:02:00.661Z',
    viewedISO: '2020-07-02T23:02:00.661Z',
    bid: 400000,
  }

  return (
    <PageContainer>
      <Navigation>
        <Left>
          <BackIcon style={{ marginRight: 'var(--space-sm)' }} />
          {isMobile ? <H4>{t('applicants')}</H4> : <H3>{t('applicants')}</H3>}
        </Left>

        {!isMobile && (
          <Right>
            <Stat title={t('stats.total')} value={25} />
            <Stat title={t('stats.new')} value={10} />
            <Stat title={t('stats.viewed')} value={5} />
            <Stat title={t('stats.appointment')} value={3} />
            <Stat title={t('stats.others')} value={6} />
          </Right>
        )}
      </Navigation>

      <Filters>
        <Search />
        <Row>
          <Filter title={t('filters.bids')} />
          <Filter title={t('filters.status')} />
        </Row>
      </Filters>

      <ApplicantList title="Appointment set" applicants={[applicant]} />
    </PageContainer>
  )
}

interface Props {
  title: string
  applicants: ApplicantType[]
}

function ApplicantList({ title, applicants }: Props) {
  return (
    <>
      <H4
        style={{ marginBottom: 'var(--space-md)' }}
      >{`${title} (${applicants.length})`}</H4>

      <Applicants>
        {applicants.map((applicant) => (
          <Applicant key={applicant.id} {...applicant} />
        ))}
      </Applicants>
    </>
  )
}
