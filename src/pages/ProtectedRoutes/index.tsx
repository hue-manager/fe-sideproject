import { getToken, getUserRole } from '../../utils/cookies'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface ProtectedRoutes {
  children: React.ReactNode
  path: string
}

const ProtectedRoutes: React.FC<ProtectedRoutes> = () => {
  // const { pathname } = useLocation()
  // const navigate = useNavigate()
  // const token = getToken()
  // const userRole = getUserRole()
  // const isLoggedin =

  return <div></div>
}

export default ProtectedRoutes
