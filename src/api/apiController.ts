import { getToken } from '../utils/cookies'
import axios from 'axios'
const { VITE_URL } = import.meta.env

const instance = axios.create({
  baseURL: VITE_URL,
  timeout: 10000,
})

instance.interceptors.request.use(
  function (config) {
    // const token = JSON.parse(localStorage.getItem('token') || '')
    const token = getToken()
    config.headers['Authorization'] = `Bearer ${token}`
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    console.log('return error')
    return Promise.reject(error)
  }
)

export default instance
