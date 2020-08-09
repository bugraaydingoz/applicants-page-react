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
  margin-bottom: var(--space-md);

  @media (min-width: 768px) {
    margin-bottom: var(--space-lg);
  }
`

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: var(--space-md);

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: var(--space-lg);
  }
`

// export const ApplicantsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `

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
`

export const Left = styled.div`
  display: flex;
  cursor: pointer;
`

export const Right = styled.div`
  display: flex;
`

export const Row = styled.div`
  display: flex;
`
