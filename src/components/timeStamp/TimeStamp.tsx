import React from 'react'
import styled from 'styled-components'

type Props = {}

const TimeStamp = (props: Props) => {
  return (
    <Wrap>
      <Time>MM:SS</Time>
      <p>로그인 연장</p>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 200px;
  height: 50px;
  background-color: lightpink;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    padding-left: 10px;
    font-weight: 600;
    color: var(--color-primary);
  }
`
const Time = styled.div``

export default TimeStamp
