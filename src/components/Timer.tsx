import { getExpiration, setExpiration } from '../utils/cookies'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

type Props = {}

const Timer = () => {
  const expiration = getExpiration().split(':')
  console.log('expiration', expiration)
  const current = new Date().toTimeString().split(' ')[0].split(':')
  console.log('current', current)

  const [minutes, setMinutes] = useState<any>(
    Math.abs(parseInt(expiration[1]) - parseInt(current[1]))
  )
  const [seconds, setSeconds] = useState<any>(
    Math.abs(parseInt(expiration[2]) - parseInt(current[2]))
  )

  useEffect(() => {
    const countdown: any = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1)
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown)
        } else {
          setMinutes(parseInt(minutes) - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(countdown)
    }
  }, [minutes, seconds])

  return (
    <TimeStamp>
      {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
      <p
        onClick={() => {
          setExpiration()
        }}
      >
        로그인 연장
      </p>
    </TimeStamp>
  )
}

const TimeStamp = styled.div`
  width: 150px;
  height: 50px;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  font-weight: 600;
  align-items: center;
  border-radius: 20px;
  gap: 10px;
  p {
    cursor: pointer;
  }
`

export default Timer
