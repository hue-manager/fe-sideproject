import { useState } from 'react'
import { getToken, getUserRole } from './cookies'

export async function checkLoginStatus() {
  const token = getToken()
  const userRole = getUserRole()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  if (token && userRole) {
    setIsLoggedIn(true)
    return isLoggedIn
  } else {
    setIsLoggedIn(false)
    return isLoggedIn
  }
}
