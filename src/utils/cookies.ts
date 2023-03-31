import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export const setCookie = (token: string) => {
  return cookies.set('token', token, {
    path: '/',
    maxAge: 180,
  })
}

export const getCookie = () => {
  const token = cookies.get('token')
  return token
}

export const removeCookie = () => {
  return cookies.set('token', '', {
    path: '/',
    maxAge: -1,
  })
}
