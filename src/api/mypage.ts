import { getUserId } from '../utils/cookies'
import API_URLS from '../constants/apiConst'
import instance from './apiController'
import { FormValue } from '@components/Mypage/EditInfoModal'

export const getUserInfo = async () => {
  try {
    const userId = getUserId()
    const response = await instance.get(`${API_URLS.USER_INFO}${userId}`)
    return response.data
  } catch (error) {
    if (error instanceof Error) {
      return 'fail'
    } else {
      throw error
    }
  }
}

export const editUserInfo = async (values: FormValue) => {
  try {
    const userId = getUserId()
    const response = await instance.post(
      `${API_URLS.USER_INFO}${userId}${API_URLS.EDIT_INFO}`,
      values
    )
    if (response.data === '성공') return 'ok'
    if (response.data === 'Email is duplicated') return 'Email is duplicated'
  } catch (error) {
    if (error instanceof Error) {
      return 'fail'
    } else {
      throw error
    }
  }
}
