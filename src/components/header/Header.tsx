import React from 'react'

// Components
import { ReactComponent as MenuIcon } from '../icons/menu.svg'
import { ReactComponent as Logo } from '../icons/logo.svg'
import { ReactComponent as MessageActive } from '../icons/message-active.svg'

// Styles
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <MenuIcon />
      <Logo />
      <MessageActive />
    </HeaderContainer>
  )
}
