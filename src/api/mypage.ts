import { getUserId } from '../utils/cookies'
import API_URLS from '../constants/apiConst'
import instance from './apiController'

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
