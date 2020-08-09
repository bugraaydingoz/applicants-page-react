import React from 'react'
import { useTranslation } from 'react-i18next'
import { useViewport } from '../../hooks/useViewport'

import { ApplicantStatus } from '../../services/applicant'

// Components
import { ReactComponent as BackIcon } from '../../components/shared/icons/back.svg'
import { Search } from '../../components/search'
import { Filter } from '../../components/filter'
import { ApplicantList } from '../../components/applicant/ApplicantList'
import { Stats } from '../../components/stat/Stats'

// Styles
import { PageContainer, Navigation, Left, Filters } from './styles'
import { H4, H3 } from '../../components/shared/typography'
import { Flex } from '../../components/shared/layout'

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

        {!isMobile && <Stats />}
      </Navigation>

      <Filters>
        <Search />
        <Flex>
          <Filter title={t('filters.bids')} />
          <Filter title={t('filters.status')} />
        </Flex>
      </Filters>

      <ApplicantList title={t('titles.appointment')} applicants={[applicant]} />
      <ApplicantList title={t('titles.viewed')} applicants={[applicant]} />
    </PageContainer>
  )
}
