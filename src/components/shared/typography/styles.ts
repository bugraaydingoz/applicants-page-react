import styled from 'styled-components'

export const H4 = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: ${({ color }) => color || 'var(--gray-500)'};
`

export const H3 = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: ${({ color }) => color || 'var(--gray-500)'};
`

export const Body2 = styled.div`
  margin: 0;
  font-size: 14px
  font-weight: normal;
  color: ${({ color }) => color || 'var(--gray-500)'};
`
