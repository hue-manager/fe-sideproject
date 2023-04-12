import { getToken } from './../utils/cookies'
import { getUserId } from '../utils/cookies'
import axios from 'axios'
import { IPostApply } from '../env'

const BASE_URL = '0f27-58-227-41-28.ngrok-free.app'

const HEADERS = {
  'Content-Type': 'application/json',
}

class Axios {
  axiosClient
  constructor() {
    this.axiosClient = axios.create({
      baseURL: BASE_URL,
      headers: HEADERS,
    })
  }
  /** 연차 및 당직 신청 post api*/
  async postApply(accessToken: string, { category, memo, startDate, endDate }: IPostApply) {
    if (!accessToken) throw Error(`[에러]accessToken = "${accessToken}"`)
    try {
      const response = await this.axiosClient.post(
        '/schedules/save',
        {
          category,
          memo,
          startDate,
          endDate,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      return response
    } catch (error) {
      console.error('postApply error:', error)
      throw error
    }
  }

  /**유저 정보 get api */
  async getUserInfo(accessToken: string) {
    if (!accessToken) throw Error(`[에러]accessToken = "${accessToken}" 입니다`)
    try {
      const userId = getUserId()
      const response = await this.axiosClient.get(`users/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data.user
    } catch (error) {
      console.error('postApply error:', error)
      throw error
    }
  }

  /**유저 신청 정보 조회 get api */
  async getUserSchedules(accessToken: string, page = 0) {
    if (!accessToken) throw Error(`accessToken = "${accessToken}" 입니다`)
    try {
      const userId = getUserId()
      const response = await this.axiosClient.get(`schedules/userinfo/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          page,
        },
      })
      return response.data
    } catch (error) {
      console.error('getUserSchedules error:', error)
      throw error
    }
  }
  /**유저 신청 정보 조회22222 get api */
  async fetchApply(page: number = 0) {
    const accessToken = getToken()
    try {
      const userId = getUserId()
      const response = await this.axiosClient.get(`schedules/userinfo/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          page,
        },
      })
      return response.data
    } catch (error) {
      console.error('getUserSchedules error:', error)
      throw error
    }
  }

  /**유저 신청 정보 엑셀 */
  async getUserExcel(accessToken: string, role: string) {
    if (!accessToken) throw Error(`accessToken = "${accessToken}" 입니다`)
    try {
      const response = await this.axiosClient.get(`schedules/excel`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          role: `${role}`,
        },
      })
      return response.data
    } catch (error) {
      console.error('getUserSchedules error:', error)
      throw error
    }
  }
}

export const ax = new Axios()
