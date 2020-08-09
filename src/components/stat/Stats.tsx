import React from 'react'
import { useTranslation } from 'react-i18next'

// Components
import { Stat } from './Stat'

// Styles
import { Flex } from '../shared/layout'

interface Props {
  total: number
  new: number
  viewed: number
  appointment: number
  others: number
}

export function Stats(stats: Props) {
  const { t } = useTranslation()
  return (
    <Flex>
      <Stat title={t('stats.total')} value={stats.total} />
      <Stat title={t('stats.new')} value={stats.new} />
      <Stat title={t('stats.viewed')} value={stats.viewed} />
      <Stat title={t('stats.appointment')} value={stats.appointment} />
      <Stat title={t('stats.others')} value={stats.others} />
    </Flex>
  )
}
