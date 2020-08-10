import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  margin-top: var(--space-sm);
  margin-right: var(--space-xs);
  height: 45px;
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius-md);
  color: var(--gray-500);

  @media (min-width: 768px) {
    margin-top: 0;
  }

  &:hover {
    cursor: pointer;
  }
`
