import React from 'react'
import styled from 'styled-components'

interface ILogo {
  type?: string
  width?: string
  height?: string
  onClick?: any
}

const Logo = ({ type, width, height, onClick }: ILogo) => {
  return (
    <LogoStyle width={width} height={height} onClick={onClick}>
      {type === 'white' && <img src="/logo_white.png" alt="logo" />}
      {type === 'black' && <img src="/logo_original.png" alt="logo" />}
    </LogoStyle>
  )
}

export default Logo

const LogoStyle = styled.div<{ type?: string; width?: string; height?: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  img {
    width: 100%;
  }
`
