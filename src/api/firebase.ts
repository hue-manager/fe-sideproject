// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { orderByChild, getDatabase, ref, set, get, remove } from 'firebase/database'
import { v4 as uuid } from 'uuid'
const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DB_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
} = import.meta.env

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAwK_6Qb6rT35bp3qqPjp0ykhmL7cCRYJA',
  authDomain: 'hue-manager-7c31d.firebaseapp.com',
  databaseURL: 'https://hue-manager-7c31d-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'hue-manager-7c31d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

interface IOverview {
  application: number
  approved: number
  onDuty: number
  pending: number
  rejection: number
}
interface IUserInfo {
  department: string
  email: string
  overview: IOverview
  phoneNumber: string
  position: string
  role: string
  userName: string
  vacationCount: number
  id: number
}

interface IScheduleData {
  category: string
  startDate: string
  endDate: string
  memo: string
  id: string
  status: string
  userInfo: IUserInfo
}

/**유저 정보 get */
export async function getUser(userName: string) {
  return get(ref(database, `user/${userName}`)) //
    .then((snapshot) => {
      const items = snapshot.val()
      return items ? { ...items } : null
    })
}

/**유저 post*/
export async function addNewUser() {
  const userInfo = {
    id: 6,
    email: 'manman@abc.com',
    userName: '만만이',
    phoneNumber: '010-3456-7857',
    role: 'ROLE_USER',
    vacationCount: 15,
    position: '사원',
    department: '재무팀',
    overview: {
      onDuty: 0,
      application: 0,
      approved: 0,
      pending: 0,
      rejection: 0,
    },
  }
  return set(ref(database, `user/${userInfo.userName}`), userInfo)
}

/**유저 정보 수정 post*/
export async function addUpdateUserInfo(userName: string, userInfo: IUserInfo) {
  return set(ref(database, `user/${userName}`), userInfo)
}

/**유저의 스케쥴 get */
export async function getSchedule(userName: string) {
  return get(ref(database, `schedule/${userName}`)) //
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
  return set(ref(database, `schedule/${userInfo.userName}/${id}`), {
    userInfo,
    id,
    startDate,
    endDate,
    category,
    memo,
    status,
  })
}

/**스케쥴 전부 get */
export async function getAllSchedule() {
  return get(ref(database, `schedule`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {}
      return Object.values(items)
    })
}
