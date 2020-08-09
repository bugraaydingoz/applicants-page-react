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

    // Remove last row's margin
    &:nth-last-child(1),
    &:nth-last-child(2),
    &:nth-last-child(3),
    &:nth-last-child(4) {
      margin-bottom: 0;
    }
  }
`

export const Applicants = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: var(--space-lg);
  margin-right: calc(-1 * var(--space-sm));
  overflow: scroll;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    margin-right: calc(-1 * var(--space-md));
  }

  &:last-child {
    margin-bottom: 0;
  }
`
