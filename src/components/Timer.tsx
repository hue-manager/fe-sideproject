import { getExpiration, setExpiration } from '../utils/cookies'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

type Props = {}
function formatSeconds(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  const formattedMinutes = minutes.toString().padStart(1, '0')
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0')
  return `${formattedMinutes}:${formattedSeconds}`
}

const Timer = () => {
  const TIME = 1200
  const [time, setTime] = useState(TIME) // 20분 = 1200초

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleClick = () => {
    setTime(TIME)
    toast.success('로그인 유효기간이 연장되었습니다.')
  }

  return (
    <TimeStamp>
      <p>
        만료 시간 <Time>{formatSeconds(time)}</Time>
      </p>
      <span onClick={handleClick}>로그인 연장</span>
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
    font-weight: 700;
    color: var(--color-primary);
    cursor: pointer;
    display: flex;
  }
  & > span {
    cursor: pointer;
    padding: 10px;
    border-radius: 30px;
    background-color: var(--color-primary);
  }
`
const Time = styled.div`
  font-weight: 700;
  /* font-size: 25px; */
  margin-left: 5px;
  /* position: absolute; */
  color: var(--color-primary);
  /* color: var(--color-black70); */
  /* color: black; */
  cursor: pointer;
`
export default Timer
