import { Cookies } from 'react-cookie'

const cookies = new Cookies()
const date = new Date()
date.setMinutes(date.getMinutes() + 15)

// 토큰 저장
export const setToken = (token: string) => {
  const newToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imh5ZWppQGFiYy5jb20iLCJpYXQiOjE2ODEyOTc5NTcsImV4cCI6MTY4MTMwNTE1N30.H0DJp8O6S31DQfiXb8bj62YF6hKBHfoXw2-mAM1RJrc'
  return cookies.set('token', newToken, {
    path: '/',
    maxAge: 9000,
  })
}

// 토큰 가져오기
export const getToken = () => {
  const token = cookies.get('token')
  return token
}

// 토큰 지우기
export const removeToken = () => {
  return cookies.set('token', '', {
    path: '/',
    maxAge: -1,
  })
}

// 만료시간 저장
export const setExpiration = () => {
  return cookies.set('expiration', date.toTimeString().split(' ')[0], {
    path: '/',
    maxAge: 9000,
  })
}

// 만료시간 가져오기
export const getExpiration = () => {
  const expiration = cookies.get('expiration')
  return expiration
}

// 만료시간 지우기
export const removeExpiration = () => {
  return cookies.set('expiration', date, {
    path: '/',
    maxAge: -1,
  })
}

// 유저아이디 저장
export const setUserId = (userId: number) => {
  return cookies.set('userId', userId, {
    path: '/',
    maxAge: 9000,
  })
}

// 유저아이디 가져오기
export const getUserId = () => {
  const userId = cookies.get('userId')
  return userId
}

// 유저아이디 지우기
export const removeUserId = () => {
  return cookies.set('userId', '', {
    path: '/',
    maxAge: -1,
  })
}

// 유저롤 저장
export const setUserRole = (userRole: string) => {
  return cookies.set('userRole', userRole, {
    path: '/',
    maxAge: 9000,
  })
}

// 유저롤 가져오기
export const getUserRole = () => {
  const userId = cookies.get('userRole')
  return userId
}

// 유저롤 지우기
export const removeUserRole = () => {
  return cookies.set('userRole', '', {
    path: '/',
    maxAge: -1,
  })
}

/* 로그인 상태, 로그아웃 상태일 때 홈으로 가도 되는지 탐지 */
// 저장
export const setAcceptHome = (acceptHome: boolean) => {
  return cookies.set('acceptHome', acceptHome, {
    path: '/',
    maxAge: 900,
  })
}
// 가져오기
export const getAcceptHome = () => {
  const acceptHome = cookies.get('acceptHome')
  return acceptHome
}
// 삭제
export const removeAcceptHome = () => {
  return cookies.set('acceptHome', true, {
    path: '/',
    maxAge: -1,
  })
}

// 로그인 정보 한번에 저장
export const setInfo = (token: string, userId: number, userRole: string, acceptHome: boolean) => {
  setToken(token)
  setExpiration()
  setUserId(userId)
  setUserRole(userRole)
  setAcceptHome(acceptHome)
}

// 로그인 정보 한번에 삭제
export const removeInfo = () => {
  removeToken()
  removeExpiration()
  removeUserId()
  removeUserRole()
  removeAcceptHome()
}

export const expirationToken = () => {}
