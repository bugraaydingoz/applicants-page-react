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

export function Stats() {
  const { t } = useTranslation()
  return (
    <Flex>
      <Stat title={t('stats.total')} value={25} />
      <Stat title={t('stats.new')} value={10} />
      <Stat title={t('stats.viewed')} value={5} />
      <Stat title={t('stats.appointment')} value={3} />
      <Stat title={t('stats.others')} value={6} />
    </Flex>
  )
}
