import React from 'react'
import styled from 'styled-components'

interface ILogo {
  type?: string
  width?: string
  height?: string
}

const Logo = ({ type, width, height }: ILogo) => {
  return (
    <LogoStyle width={width} height={height}>
      {type === 'white' && <img src="/logo_white.png" alt="logo" />}
      {type === 'black' && <img src="/logo_original.png" alt="logo" />}
    </LogoStyle>
  )
}

export default Logo

const LogoStyle = styled.div<ILogo>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  img {
    width: 100%;
  }
`
