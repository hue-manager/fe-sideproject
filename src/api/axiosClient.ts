import { getToken } from './../utils/cookies'
import { getUserId } from '../utils/cookies'
import axios from 'axios'
import { IPostApply } from '../env'
import { removeInfo, setInfo } from '../utils/cookies'

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

  // 일반 유저 로그인
  async login(email: string, password: string) {
    try {
      const response = await this.axiosClient.post(`/login`, {
        email,
        password,
      })
      console.log(response)
      if (response.data.message === '비밀번호를 확인해주세요.') {
        console.log(response.data.message)
        return 'wrong assword'
      }
      if (response.data.message === '계정 미승인') {
        console.log(response.data.message)
        return '계정 미승인'
      }
      // 로그인 성공시에 유저 정보 저장
      if (response.data.message === '로그인 성공' || response.data.message === '계정 미승인') {
        setInfo(response.data.token, response.data.userId, 'user', false)
        return response
      }
    } catch (error) {
      console.log(error)

      if (error instanceof Error) {
        return 'fail'
      } else {
        throw error
      }
    }
  }

  // 관리자 로그인
  async loginAdmin(email: string, password: string) {
    try {
      const response = await this.axiosClient.post(`/admins/login`, {
        email: email,
        password: password,
      })
      if (response.data.message === '비밀번호를 확인해주세요.') {
        console.log(response.data.message)
        return 'wrong password'
      }
      // 로그인 성공시에 토큰과 토큰 삭제시간 쿠키 저장소에 저장
      if (response.data.message === '관리자 로그인 성공') {
        setInfo(response.data.token, response.data.userId, 'admin', false)
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
}

export const ax = new Axios()
