import { removeInfo, setInfo } from '../utils/cookies'
import API_URLS from '../constants/apiConst'
import instance from './apiController'

// 일반 유저 로그인
export const login = async (email: string, password: string) => {
  try {
    const response = await instance.post(API_URLS.LOGIN, {
      email,
      password,
    })
    console.log(response)
    if (response.data.message === '비밀번호를 확인해주세요.') {
      console.log(response.data.message)
      return 'wrong assword'
    }
    // 로그인 성공시에 유저 정보 저장
    if (response.data.message === '로그인 성공' || response.data.message === '계정 미승인') {
      setInfo(response.data.token, response.data.userId, 'user')
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
    if (response.data.message === '관리자 로그인 성공') {
      setInfo(response.data.token, response.data.userId, 'admin')
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

export const getAllSchedule = async () => {
  try {
    const response = await instance.get(API_URLS.ALL_SCHEDULE)
    if (response.status === 200) return response.data.content
  } catch (error) {
    if (error instanceof Error) {
      return 'fail'
    } else {
      throw error
    }
  }
}

export const getUserSchedule = async (userId: number) => {
  try {
    const response = await instance.get(API_URLS.USER_SCHEDULE + `/${userId}`)
    if (response.status === 200) return response.data.content
  } catch (error) {
    if (error instanceof Error) {
      return 'fail'
    } else {
      throw error
    }
  }
}
export const logout = () => {
  removeInfo()
}

// export const schedulesSave = async () => {
//   try {
//     const response = await instance.post(API_URLS.SAVE, {
//       category: 'WORK',
//       endDate: '2023-04-02',
//       memo: '개인 업무',
//       startDate: '2023-04-02',
//     })
//     console.log(response)
//     // 로그인 성공시에 토큰과 토큰 삭제시간 쿠키 저장소에 저장
//   } catch (error) {
//     if (error instanceof Error) {
//       return 'fail'
//     } else {
//       throw error
//     }
//   }
// }

// schedulesSave()
