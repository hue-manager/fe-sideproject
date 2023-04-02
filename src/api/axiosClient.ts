import axios from 'axios'
import { ILoginInput, IPostApply } from '../env'

const BASE_URL = 'http://13.124.96.231:8080/'

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
      // console.log(response)
      return response
    } catch (error) {
      console.error('postApply error:', error)
      throw error
    }
  }

  async postLogin({ email, password }: ILoginInput) {
    try {
      const response = await this.axiosClient.post('/login', {
        email,
        password,
      })
    } catch (error) {
      console.error('postLogin error:', error)
      throw error
    }
  }
}

export const ax = new Axios()
