import React from 'react'
import styled from 'styled-components'

interface IButton {
  buttonType?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  width?: string
  height?: string
  borderRadius?: string
  margin?: string
  padding?: string
  bgColor?: string
  color?: string
  borderColor?: string
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  buttonType = '',
  type = 'button',
  width = '100px',
  height = '42px',
  borderRadius = '',
  margin = '',
  padding = '',
  bgColor = '',
  color = '',
  borderColor = 'var(--color-primary)',
  children,
  onClick,
}: IButton) => {
  return (
    <ButtonStyle
      type={type}
      buttonType={buttonType}
      width={width}
      height={height}
      borderRadius={borderRadius}
      margin={margin}
      padding={padding}
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  )
}

export default Button

export const ButtonStyle = styled.button<{
  buttonType: string
  width: string
  height: string
  borderRadius: string
  margin: string
  padding: string
  bgColor: string
  color: string
  borderColor: string
}>`
  cursor: pointer;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ borderColor }) => `1px solid ${borderColor}`};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  font-size: 15px;
  transition: all 0.3s linear;
  &:hover {
    background: ${({ color }) => color};
    color: ${({ bgColor }) => bgColor};
  }
`
