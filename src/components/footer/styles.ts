import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  margin: var(--space-md);
  color: var(--gray-500);
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;

  &:after {
    content: '';
    margin: 0 var(--space-xs);
    width: 3px;
    height: 3px;
    border-radius: 999px;
    background-color: var(--gray-500);
  }

  &:last-child {
    &:after {
      display: none;
    }
  }
`
