import instance from './apiController'
import axios from 'axios'

// export const login = async () => {
//   try {
//     const response = await instance.post(`/login`, {
//       email: 'qwer1234@qwer1234.com',
//       password: 'qwer1234',
//     })
//     console.log('로그인 성공')
//     return response
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log(error.message)
//     } else {
//       throw error
//     }
//   }
// }

export const login = async (email: string, password: string) => {
  try {
    const response = await instance.post(`/login`, {
      email: email,
      password: password,
    })
    console.log('로그인 성공')
    return response
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    } else {
      throw error
    }
  }
}
