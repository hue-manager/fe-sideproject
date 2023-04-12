import { removeInfo, setInfo } from '../utils/cookies'
import API_URLS from '../constants/apiConst'
import instance from './apiController'

export interface ISignUp {
  department: string
  email: string
  password: string
  phoneNumber: string
  position: string
  userName: string
}
// 일반 유저 로그인
// export const login = async (email: string, password: string) => {
//   try {
//     const response = await instance.post(API_URLS.LOGIN, {
//       email,
//       password,
//     })
//     console.log(response)
//     if (response.data.message === '비밀번호를 확인해주세요.') {
//       console.log(response.data.message)
//       return 'wrong assword'
//     }
//     if (response.data.message === '계정 미승인') {
//       console.log(response.data.message)
//       return '계정 미승인'
//     }
//     // 로그인 성공시에 유저 정보 저장
//     if (response.data.message === '로그인 성공' || response.data.message === '계정 미승인') {
//       setInfo(response.data.token, response.data.userId, 'user', false)
//       return response
//     }
//   } catch (error) {
//     console.log(error)

//     if (error instanceof Error) {
//       return 'fail'
//     } else {
//       throw error
//     }
//   }
// }

// export const loginAdmin = async (email: string, password: string) => {
//   try {
//     const response = await instance.post(API_URLS.LOGIN_ADMIN, {
//       email: email,
//       password: password,
//     })
//     if (response.data.message === '비밀번호를 확인해주세요.') {
//       console.log(response.data.message)
//       return 'wrong password'
//     }
//     // 로그인 성공시에 토큰과 토큰 삭제시간 쿠키 저장소에 저장
//     if (response.data.message === '관리자 로그인 성공') {
//       setInfo(response.data.token, response.data.userId, 'admin', false)
//       return response
//     }
//   } catch (error) {
//     if (error instanceof Error) {
//       return 'fail'
//     } else {
//       throw error
//     }
//   }
// }

// 로그아웃
// export const logout = () => {
//   removeInfo()
// }

// 모든 스케줄 가져오기
// export const getAllSchedule = async () => {
//   try {
//     const response = await instance.get(API_URLS.ALL_SCHEDULE)
//     if (response.status === 200) return response.data.content
//   } catch (error) {
//     if (error instanceof Error) {
//       return 'fail'
//     } else {
//       throw error
//     }
//   }
// }

// 유저 스케줄 불러오기
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

// 일반 유저 회원가입
export const signUp = async (data: ISignUp) => {
  try {
    const response = await instance.post(API_URLS.SIGNUP, {
      department: data.department,
      email: data.email,
      password: data.password,
      phoneNumber: data.phoneNumber,
      position: data.position,
      userName: data.userName,
    })

    if (response.data.message === 'Email is duplicated') {
      return 'duplicated'
    }
    // 로그인 성공시에 유저 정보 저장
    if (response.data.message === '회원가입 성공') {
      console.log(response.data.message)
      return response.data.message
    }
  } catch (error) {
    if (error instanceof Error) {
      return 'fail'
    } else {
      throw error
    }
  }
}
