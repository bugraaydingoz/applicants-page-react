import React from 'react'
import { useViewport } from '../../hooks/useViewport'

// Components
import { ReactComponent as MenuIcon } from '../icons/menu.svg'
import { ReactComponent as Logo } from '../icons/logo.svg'
import { ReactComponent as MessageActiveIcon } from '../icons/message-active.svg'
import { ReactComponent as ContactIcon } from '../icons/contact.svg'
import { ReactComponent as UserIcon } from '../icons/user.svg'
import { ReactComponent as LogoutIcon } from '../icons/logout.svg'

// Styles
import { HeaderContainer, ActionsContainer, ActionContainer } from './styles'

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
        <ActionContainer>
          <ContactIcon />
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
