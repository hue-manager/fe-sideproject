import { getExpiration, setExpiration } from '../utils/cookies'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

type Props = {}

const Timer = () => {
  const [value, setValue] = useState()

  const addExpiration = () => {
    setExpiration()
    const expiration = getExpiration()
    setValue(expiration)
  }
  useEffect(() => {
    addExpiration()
  }, [])

  return (
    <TimeStamp>
      <p>만료 시간 {value}</p>
      <span onClick={(e) => addExpiration()}>로그인 연장</span>
    </TimeStamp>
  )
}

const TimeStamp = styled.div`
  width: 250px;
  height: 50px;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  font-weight: 600;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 20px;
  gap: 10px;
  p {
    padding: 15px;
    color: var(--color-primary);
    cursor: pointer;
  }
  span {
    cursor: pointer;
    padding: 10px;
    border-radius: 30px;
    background-color: var(--color-primary);
  }
`

export default Timer
