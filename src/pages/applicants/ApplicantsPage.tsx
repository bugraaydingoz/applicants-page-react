import React from 'react'
import { useTranslation } from 'react-i18next'
import { useViewport } from '../../hooks/useViewport'

// Components
import { ReactComponent as BackIcon } from '../../components/shared/icons/back.svg'
import { Stat } from '../../components/stat'
import { Search } from '../../components/search'

// Styles
import { PageContainer, Navigation, Left, Right, Filters } from './styles'
import { H4, H3 } from '../../components/shared/typography'

export function ApplicantsPage() {
  const { t } = useTranslation()
  const { width } = useViewport()
  const isMobile = width < 768
  return (
    <PageContainer>
      {/* Navigation */}
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

      {/* Filters */}
      <Filters>
        <Search />
      </Filters>
    </PageContainer>
  )
}
