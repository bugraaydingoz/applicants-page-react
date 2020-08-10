import React from 'react'
import { useTranslation } from 'react-i18next'

// Styles
import { H4, Body1 } from '../shared/typography'
import { Button } from './styles'

interface Props {
  onClick: () => void
}

export function Error({ onClick }: Props) {
  const { t } = useTranslation()
  return (
    <>
      <H4 style={{ marginBottom: 'var(--space-md)' }}>{t('error.title')}</H4>
      <Body1 style={{ marginBottom: 'var(--space-sm)' }}>
        {t('error.body')}
      </Body1>
      <Button onClick={onClick}>{t('error.action')}</Button>
    </>
  )
}
