import React, { useEffect } from 'react'

// Hooks
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'
import { useViewport } from '../../hooks/useViewport'
import { useUrlQuery } from '../../hooks/useUrlQuery'

// Services
import { ApplicantService, Applicant } from '../../services/applicant'

// Components
import { ReactComponent as BackIcon } from '../../components/shared/icons/back.svg'
import { Search } from '../../components/search'
import { Filter } from '../../components/filter'
import { ApplicantList } from '../../components/applicant'
import { Stats } from '../../components/stat'
import { Error } from '../../components/error'
import { NoResult } from '../../components/no-result'

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

  const [urlQuery, setUrlQuery] = useUrlQuery()
  const { stats, groups } = ApplicantService.filter(applicants, urlQuery)

  useEffect(
    () => {
      if (!applicants?.length) {
        return
      }

      const { minBid, maxBid, search } = defaultFilters(applicants)
      setUrlQuery({
        search,
        minBid,
        maxBid,
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [applicants]
  )

  function defaultFilters(applicants: Applicant[]) {
    const bids = applicants.filter((app) => app.bid).map((app) => app.bid ?? 0)
    return {
      search: '',
      minBid: Math.min(...bids),
      maxBid: Math.max(...bids),
    }
  }

  return (
    <PageContainer>
      <Navigation>
        <Left>
          <BackIcon style={{ marginRight: 'var(--space-sm)' }} />
          {isMobile ? <H4>{t('applicants')}</H4> : <H3>{t('applicants')}</H3>}
        </Left>

        {!isMobile && (
          <Stats
            isLoading={isLoading}
            total={stats.total}
            appointment={stats.appointment}
            viewed={stats.viewed}
            others={stats.interested + stats.accepted}
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

      {!isError && !isLoading && groups.every((group) => !group.data.length) && (
        <NoResult
          onClick={() => {
            if (!applicants?.length) {
              return
            }
            const { minBid, maxBid, search } = defaultFilters(applicants)
            setUrlQuery({
              minBid,
              maxBid,
              search,
            })
          }}
        />
      )}

      {!isError &&
        groups.map((group) => (
          <ApplicantList
            key={group.key}
            title={t(`titles.${group.key}`)}
            applicants={group.data}
            isLoading={isLoading}
          />
        ))}
    </PageContainer>
  )
}
