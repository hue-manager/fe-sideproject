import { useEffect, useState } from 'react'

const getCurrentTime = () => {
  const minutes = new Date().getMinutes()
  const seconds = new Date().getSeconds()
  const time = `${minutes} : ${seconds}`
  return time
}

const getExpirationTime = () => {
  const expiration = new Date().getTime()
  console.log(expiration)
}
getExpirationTime()


export const getCurrent = () => {
  useEffect(() => {
    setInterval(() => {
      const now = `${(new Date().getMinutes(), new Date().getSeconds())}`
      return now
    }, 1000)
  }, [])
}
