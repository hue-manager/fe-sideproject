import { Cookies } from 'react-cookie'

const cookies = new Cookies()
const date = new Date()
date.setMinutes(date.getMinutes() + 15)
date.setSeconds(0)

export const setToken = (token: string) => {
  return cookies.set('token', token, {
    path: '/',
    maxAge: 900,
  })
}

export const getToken = () => {
  const token = cookies.get('token')
  return token
}

export const removeToken = () => {
  return cookies.set('token', '', {
    path: '/',
    maxAge: -1,
  })
}

export const setExpiration = () => {
  return cookies.set('expiration', date.toTimeString().split(' ')[0], {
    path: '/',
    maxAge: 900,
  })
}

export const getExpiration = () => {
  const token = cookies.get('expiration')
  return token
}

export const removeExpiration = () => {
  return cookies.set('expiration', date, {
    path: '/',
    maxAge: -1,
  })
}

export const expirationToken = () => {}
