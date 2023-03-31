import React from 'react'
import styled from 'styled-components'

type Props = {
  text: string
}

const Button_white = ({ text }: Props) => {
  return <Button>{text}</Button>
}

const Button = styled.button`
  padding: 10px;
  background-color: white;
  border: 1px solid #515151;
  border-radius: 40px;
  color: var(--color-black90);
  font-weight: 600;
  height: 30px;
  display: flex;
  align-items: center;
  margin: auto;
`

export default Button_white
