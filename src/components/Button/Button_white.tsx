import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  id: number
  approved: boolean
  setData: any
  data: any
}

const Button_white = ({ id, approved, data, setData }: Props) => {
  const handleClick = () => {
    // 허가 -> 가입완료
    setData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            approved: true,
          }
        }
        return item
      })
    )
  }
  return (
    <Button onClick={handleClick} approved={approved}>
      {approved ? '가입완료' : '허가'}
    </Button>
  )
}

const Button = styled.button<{ approved: boolean }>`
  padding: 10px;
  background-color: white;
  /* border: 1px solid #515151; */
  border: ${({ approved }) => (approved ? '1px dotted gray' : '2px solid #515151')};
  border-radius: 40px;

  color: ${({ approved }) => (approved ? 'var(--color-black30)' : 'var(--color-black90)')};
  font-weight: 600;
  height: 30px;
  display: flex;
  align-items: center;
  margin: auto;
  transition: all 0.2s;
  &:hover {
    /* filter: brightness(0.95); */
    background-color: ${({ approved }) => (approved ? 'null' : 'var(--color-primary)')};
    color: ${({ approved }) => (approved ? 'null' : 'white')};
  }
`

export default Button_white
