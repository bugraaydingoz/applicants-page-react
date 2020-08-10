import React from 'react'
import { useTranslation } from 'react-i18next'

// Components
import { Stat } from './Stat'

// Styles
import { Flex } from '../shared/layout'
import { StatMock } from './styles'

interface Props {
  isLoading: boolean
  total: number
  appointment: number
  viewed: number
  others: number
}

export function Stats({ isLoading, ...stats }: Props) {
  const { t } = useTranslation()
  if (isLoading) {
    return (
      <Flex>
        <StatMock />
        <StatMock />
        <StatMock />
        <StatMock />
      </Flex>
    )
  }
  return (
    <Flex>
      <Stat title={t('stats.total')} value={stats.total} />
      <Stat title={t('stats.appointment')} value={stats.appointment} />
      <Stat title={t('stats.viewed')} value={stats.viewed} />
      <Stat title={t('stats.others')} value={stats.others} />
    </Flex>
  )
}
