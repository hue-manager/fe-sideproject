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
  box-shadow: 5px 6px 10px rgba(116, 92, 242, 0.4);
`

export default Button_primary
