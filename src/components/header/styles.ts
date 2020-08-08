import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: var(--space-sm) var(--space-md);

  @media (min-width: 768px) {
    margin: var(--space-md) var(--space-xl);
  }
`

export const ActionsContainer = styled.div`
  display: flex;
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 32px;
  margin-right: var(--space-md);

  &:last-child {
    margin-right: 0;
  }
`
