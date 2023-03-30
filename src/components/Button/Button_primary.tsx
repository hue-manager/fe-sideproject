import React from 'react'
import styled from 'styled-components'

type Props = {
  text: string
}

const Button_primary = ({ text }: Props) => {
  return <Button>{text}</Button>
}

const Button = styled.button`
  width: 150px;
  height: 34px;
  background-color: var(--color-primary);
  color: #fff;
  font-weight: 500;
  border-radius: 20px;
  border: none;
`

export default Button_primary
