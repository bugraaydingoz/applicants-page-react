import styled from 'styled-components'

export const PageContainer = styled.main`
  padding: var(--space-md) var(--space-sm);
  background-color: white;
  border-radius: var(--border-radius-md);

  @media (min-width: 768px) {
    margin: var(--space-md) var(--space-xl);
    padding: var(--space-lg) var(--space-md);
    box-shadow: var(--box-shadow);
  }
`
export const Navigation = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`

export const Left = styled.div`
  display: flex;
`

export const Right = styled.div`
  display: flex;
`
