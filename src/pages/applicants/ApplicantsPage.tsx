import React from 'react'
import { ApplicantService, Status } from '../../services/applicant'
import { lowerCase } from 'lodash-es'

// Hooks
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'
import { useViewport } from '../../hooks/useViewport'

// Components
import { ReactComponent as BackIcon } from '../../components/shared/icons/back.svg'
import { Search } from '../../components/search'
import { Filter } from '../../components/filter'
import { ApplicantList } from '../../components/applicant'
import { Stats } from '../../components/stat'
import { Error } from '../../components/error'

// Styles
import { PageContainer, Navigation, Left, Filters } from './styles'
import { H4, H3 } from '../../components/shared/typography'
import { Flex } from '../../components/shared/layout'

export function ApplicantsPage() {
  const { t } = useTranslation()
  const { width } = useViewport()
  const isMobile = width < 768

  const { isLoading, isError, data: applicants, refetch } = useQuery(
    'applicants',
    ApplicantService.getAll,
    {
      retry: false, // react-query retries on error by default
      refetchOnWindowFocus: false, // it brings a weird behavior with high rate errors
    }
  )

  const groups = Object.entries(Status).map(([key, status]) => {
    const apps = applicants?.filter((app) => app.status === status)
    return {
      key: lowerCase(key),
      data: apps ?? [],
    }
  })

  return (
    <PageContainer>
      <Navigation>
        <Left>
          <BackIcon style={{ marginRight: 'var(--space-sm)' }} />
          {isMobile ? <H4>{t('applicants')}</H4> : <H3>{t('applicants')}</H3>}
        </Left>

        {!isMobile && (
          <Stats
            total={applicants?.length || 0}
            new={10}
            viewed={5}
            appointment={5}
            others={10}
          />
        )}
      </Navigation>

      <Filters>
        <Search />
        <Flex>
          <Filter title={t('filters.bids')} />
          <Filter title={t('filters.status')} />
        </Flex>
      </Filters>

      {isError && <Error onClick={() => refetch()} />}

      {!isError &&
        groups.map((group) => (
          <ApplicantList
            key={group.key}
            title={t(`titles.${group.key}`)}
            applicants={group.data}
            loading={isLoading}
          />
        ))}
    </PageContainer>
  )
}
