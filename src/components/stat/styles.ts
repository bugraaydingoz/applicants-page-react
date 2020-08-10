import styled from 'styled-components'

export const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110px;
  border-right: 1px solid var(--gray-300);

  &:last-child {
    border: none;
  }
`

export const StatMock = styled.div`
  display: flex;
  align-items: center;
  width: calc(110px - (2 * var(--space-sm)));
  height: 44px;
  margin: 0 var(--space-sm);
  background: var(--gray-200);
`
