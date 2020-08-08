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
