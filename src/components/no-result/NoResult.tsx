import React from 'react'
import { useTranslation } from 'react-i18next'

// Styles
import { H4, Body1 } from '../shared/typography'
import { Button } from '../shared/elements'

interface Props {
  onClick: () => void
}

export function NoResult({ onClick }: Props) {
  const { t } = useTranslation()
  return (
    <>
      <H4 style={{ marginBottom: 'var(--space-md)' }}>{t('noResult.title')}</H4>
      <Body1 style={{ marginBottom: 'var(--space-sm)' }}>
        {t('noResult.body')}
      </Body1>
      <Button onClick={onClick}>{t('noResult.action')}</Button>
    </>
  )
}
