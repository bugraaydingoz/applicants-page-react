import React from 'react'

// Hooks
import { useViewport } from '../../hooks/useViewport'
import { useTranslation } from 'react-i18next'

// Components
import { ReactComponent as MenuIcon } from '../shared/icons/menu.svg'
import { ReactComponent as Logo } from '../shared/icons/logo.svg'
import { ReactComponent as MessageActiveIcon } from '../shared/icons/message-active.svg'
import { ReactComponent as ContactIcon } from '../shared/icons/contact.svg'
import { ReactComponent as UserIcon } from '../shared/icons/user.svg'
import { ReactComponent as LogoutIcon } from '../shared/icons/logout.svg'

// Styles
import { HeaderContainer, ActionsContainer, ActionContainer } from './styles'
import { H5 } from '../shared/typography'

export function Header() {
  const { width } = useViewport()
  const isMobile = width <= 768
  return (
    <HeaderContainer>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </HeaderContainer>
  )
}

function HeaderMobile() {
  return (
    <>
      <MenuIcon />
      <Logo style={{ width: '100' }} />
      <MessageActiveIcon />
    </>
  )
}

function HeaderDesktop() {
  const { t } = useTranslation()
  return (
    <>
      {/* Left buttons */}
      <ActionsContainer>
        <ActionContainer>
          <MenuIcon />
        </ActionContainer>
        <Logo />
      </ActionsContainer>

      {/* Right buttons */}
      <ActionsContainer>
        <ActionContainer style={{ width: 'auto' }}>
          <ContactIcon style={{ marginRight: 'var(--space-xs' }} />
          <H5>{t('header.contactSupport')}</H5>
        </ActionContainer>
        <ActionContainer>
          <MessageActiveIcon />
        </ActionContainer>
        <ActionContainer>
          <UserIcon />
        </ActionContainer>
        <ActionContainer>
          <LogoutIcon />
        </ActionContainer>
      </ActionsContainer>
    </>
  )
}
