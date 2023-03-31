import { logout } from '../../api/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {}

const Main = (props: Props) => {
  const navigate = useNavigate()

  const logoutSubmitHandler = async (event: React.MouseEvent) => {
    event.preventDefault()
    const res = await logout()
    if (res) {
      navigate('/')
    }
  }
  return (
    <div>
      Home
      <button onClick={logoutSubmitHandler}>임시 로그아웃 버튼</button>
    </div>
  )
}

export default Main
