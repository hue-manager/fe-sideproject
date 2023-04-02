import { removeToken, setExpiration, setToken } from '../utils/cookies'
import API_URLS from '../constants/apiConst'
import instance from './apiController'

// 일반 유저 로그인
export const login = async (email: string, password: string) => {
  try {
    const response = await instance.post(API_URLS.LOGIN, {
      email: email,
      password: password,
    })
    if (response.data.message === '비밀번호를 확인해주세요.') {
      console.log(response.data.message)
      return 'wrong assword'
    }
    // 로그인 성공시에 토큰과 토큰 삭제시간 쿠키 저장소에 저장
    if (response.data.message === '로그인 성공') {
      console.log(response.data)
      setToken(response.data.token)
      setExpiration()
      return response
    }
  } catch (error) {
    if (error instanceof Error) {
      return 'fail'
    } else {
      throw error
    }
  }
}

export const loginAdmin = async (email: string, password: string) => {
  try {
    const response = await instance.post(API_URLS.LOGIN_ADMIN, {
      email: email,
      password: password,
    })
    if (response.data.message === '비밀번호를 확인해주세요.') {
      console.log(response.data.message)
      return 'wrong assword'
    }
    // 로그인 성공시에 토큰과 토큰 삭제시간 쿠키 저장소에 저장
    if (response.data.message === '로그인 성공') {
      setToken(response.data.token)
      setExpiration()
      return response
    }
  } catch (error) {
    if (error instanceof Error) {
      return 'fail'
    } else {
      throw error
    }
  }
}

export const logout = () => {}
