import styled from 'styled-components'

interface Props {
  color?: string
}

export const H5 = styled.h5<Props>`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  color: ${({ color }) => color || 'var(--gray-500)'};
`

export const H4 = styled.h4<Props>`
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  color: ${({ color }) => color || 'var(--gray-500)'};
`

export const H3 = styled.h3<Props>`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  color: ${({ color }) => color || 'var(--gray-500)'};
`

export const Body2 = styled.div<Props>`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  color: ${({ color }) => color || 'var(--gray-500)'};
`

export const Body1 = styled.div<Props>`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  color: ${({ color }) => color || 'var(--gray-500)'};
`
