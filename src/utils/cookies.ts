import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export const setCookie = (token: string) => {
  return cookies.set('token', token, {
    path: '/',
    maxAge: 180,
  })
}
