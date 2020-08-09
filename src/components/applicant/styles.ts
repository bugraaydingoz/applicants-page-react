import styled from 'styled-components'

export const ApplicantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: var(--space-md);
  width: 305px;
  min-width: 305px;
  height: 241px;
  border: 1px solid var(--gray-200);
  border-radius: var(--border-radius-lg);

  @media (min-width: 768px) {
    overflow: none;
    flex-wrap: wrap;
    margin-bottom: var(--space-md);
  }
`
