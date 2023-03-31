import { logout } from '../../api/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { removeCookie } from '../../utils/cookies'
import TotalCalendar from './../../components/calendar/TotalCalendar'

interface Props {}

const Main = (props: Props) => {
  const navigate = useNavigate()

  const logoutSubmitHandler = async (event: React.MouseEvent) => {
    event.preventDefault()
    removeCookie()
    const res = await logout()
    if (res) {
      navigate('/')
    }
  }
  return (
    <div>
      Home
      <button onClick={logoutSubmitHandler}>임시 로그아웃 버튼</button>
      <TotalCalendar />
    </div>
  )
}

export default Main
