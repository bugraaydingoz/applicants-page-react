import styled from 'styled-components'

export const ApplicantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: var(--space-md);
  padding: var(--space-sm) 0;
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

interface Props {
  color: string
}

export const AvatarContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-xs);
  width: 70px;
  height: 70px;
  border-radius: 999px;
  background-color: ${({ color }) => color};
`

function CSSColor(color: string): string {
  switch (color) {
    case 'yellow':
      return 'var(--yellow-400)'
    case 'gray':
    default:
      return 'var(--gray-400)'
  }
}

export const TagContainer = styled.div<Props>`
  display: flex;
  margin-bottom: var(--space-xs);
  padding: 4px 8px;
  height: 18px;
  font-weight: bold;
  font-size: 12px;
  line-height: 10px;
  text-transform: uppercase;
  color: white;
  background-color: ${({ color }) => CSSColor(color)};
  border-radius: var(--border-radius-md);

  &:last-child {
    margin-bottom: 0;
  }
`
