import API_URLS from '../constants/apiConst'
import instance from './apiController'

export const login = async (email: string, password: string) => {
  try {
    const response = await instance.post(API_URLS.LOGIN, {
      email: email,
      password: password,
    })
    console.log('로그인 성공')
    localStorage.setItem('token', JSON.stringify(response.data))
    console.log({ token: response.data })
    return response
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    } else {
      throw error
    }
  }
}

export const logout = async () => {
  try {
    const response = await instance.post(API_URLS.LOGOUT)
    console.log('로그아웃 성공')
    localStorage.removeItem('token')
    console.log('삭제 완료')
    return response
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    } else {
      throw error
    }
  }
}
