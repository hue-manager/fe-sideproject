// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { orderByChild, getDatabase, ref, set, get, remove } from 'firebase/database'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  Auth,
  UserCredential,
  deleteUser,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { v4 as uuid } from 'uuid'

const {
  VITE_REACT_APP_FIREBASE_API_KEY,
  VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  VITE_REACT_APP_FIREBASE_DB_URL,
  VITE_REACT_APP_FIREBASE_PROJECT_ID,
} = import.meta.env

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: VITE_REACT_APP_FIREBASE_DB_URL,
  projectId: VITE_REACT_APP_FIREBASE_PROJECT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const auth = getAuth()

interface IOverview {
  application: number
  approved: number
  onDuty: number
  pending: number
  rejection: number
}
export interface IUserInfo {
  department: string
  email: string
  overview: IOverview
  phoneNumber: string
  position: string
  role: string
  userName: string
  vacationCount: number
  id: any
}

export interface IScheduleData {
  category: string
  startDate: string
  endDate: string
  memo: string
  id: string
  status: string
  userInfo: IUserInfo
}

/**유저 정보 get */
export async function getUser(userId: string) {
  return get(ref(database, `user/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val()
      return items ? { ...items } : null
    })
}

/**유저 정보 수정 post*/
export async function addUpdateUserInfo(userId: string, email: string, userName: string) {
  const userInfo = await getUser(userId)
  if (userInfo) {
    userInfo.email = email
    userInfo.userName = userName
    return set(ref(database, `user/${userId}`), userInfo)
  }
  return null
}

/**유저의 스케쥴 get */
export async function getSchedule(userId: string) {
  return get(ref(database, `schedule/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {}
      return Object.values(items) as IScheduleData[]
    })
}

/**유저의 스케쥴 post */
export async function addNewSchedule(
  userInfo: IUserInfo,
  startDate: string,
  endDate: string,
  category: string,
  memo: string
) {
  const id = uuid()
  const status = '처리대기'
  return set(ref(database, `schedule/${userInfo.id}/${id}`), {
    userInfo,
    id,
    startDate,
    endDate,
    category,
    memo,
    status,
  })
}

/**모든 유저 스케쥴 전부 get */
export async function getAllSchedule() {
  return get(ref(database, `schedule`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {}
      return Object.values(items)
    })
}

interface IAuthInfo {
  uid: string
  email: string
  authToken: string
}

/**회원가입 */
export async function join(
  email: string,
  password: string,
  userName: string,
  phoneNumber: string,
  department: string,
  position: string
): Promise<void> {
  try {
    const auth: Auth = getAuth()
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const { user } = userCredential
    const { uid } = user
    const authToken: string = await user.getIdToken()
    const authInfo: IAuthInfo = { uid, email, authToken }
    const role = 'ROLE_USER'
    const overview = {
      onDuty: 0,
      application: 0,
      approved: 0,
      pending: 0,
      rejection: 0,
    }
    const vacationCount = 15
    const userInfo: IUserInfo = {
      id: uid,
      email,
      userName,
      department,
      position,
      phoneNumber,
      role,
      overview,
      vacationCount,
    }
    return set(ref(database, `user/${userInfo.id}`), userInfo)
  } catch (error) {
    console.log(error)
  }
}

/**로그인 */
export async function login(email: string, password: string): Promise<IAuthInfo | null> {
  try {
    const auth: Auth = getAuth()
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    const { uid } = user
    const authToken: string = await user.getIdToken()
    const authInfo: IAuthInfo = { uid, email, authToken }
    localStorage.setItem('userId', uid)
    return authInfo
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function onUserStateChange(callback: (user: IUserInfo | null) => void): Promise<void> {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userInfo = await getUser(user.uid)
      if (userInfo) {
        callback(userInfo)
      } else {
        console.log('User info not found')
      }
    } else {
      callback(null)
      await logout() // 로그아웃 처리
    }
  })
}

/** 로그아웃 */
export async function logout(): Promise<void> {
  try {
    const auth: Auth = getAuth()
    await signOut(auth)
    localStorage.removeItem('userId')
  } catch (error) {
    console.log(error)
  }
}

/**회원 탈퇴 */
export async function deleteAccount(userId: string, email: string, userName: string) {
  try {
    const user = getAuth().currentUser
    if (user) {
      await deleteUser(user)
    }
    await remove(ref(getDatabase(), `user/${userId}`))
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
