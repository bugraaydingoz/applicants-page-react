import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  height: 45px;
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius-lg);

  @media (min-width: 768px) {
    width: 305px;
    margin-right: var(--space-md);
  }
`

export const Input = styled.input`
  padding: 0 10px;
  width: 100%;
  font-size: 16px;
  border: none;
  color: var(--gray-400);
`
