import UserInfoSection from '@components/Main/UserInfoSection'
import CalendarSection from '@components/Main/CalendarSection'
import ApplySection from '@components/Main/ApplySection'
import { useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllSchedule, getSchedule, getUser } from '../../api/firebase'
import { useAuth } from '../../hooks/useAuth'

interface Item {
  id: number
  category: string
  memo: string
  user: any
  startDate: string
  endDate: string
  status: string
}
interface ISearchResult {
  results: any
  number: number
  content: Item[]
  pageable: any
  totalPages: number
  totalElements: number
  last: boolean
  size: number
  numberOfElements: number
  first: boolean
  empty: boolean
}

type T = {
  content: {
    id: number
    email: string
    userName: string
    phoneNumber: string
    role: string
    vacationCount: number
    position: string
    department: string
  }[]
  totalElments: number
  totalPages: number
}

const Main = () => {
  const applySectionRef = useRef(null)
  const calendarSectionRef = useRef(null)

  const userId = localStorage.getItem('userId')

  const { isLoading, data: userInfo } = useQuery(['user'], () => getUser(userId || ''))
  const { isLoading: isScheduleLoading, data: schedule = [] } = useQuery(['user-schedule'], () =>
    getSchedule(userId || '')
  )
  if (isLoading) return <div>Loading...</div>
  if (isScheduleLoading) return <div>Loading...</div>
  console.log('schedule', schedule)
  console.log('userInfo', userInfo)

  return (
    <>
      <UserInfoSection
        userInfo={userInfo}
        applySectionRef={applySectionRef}
        calendarSectionRef={calendarSectionRef}
      />
      <CalendarSection calendarRef={calendarSectionRef} />
      <ApplySection userInfo={userInfo} applyRef={applySectionRef} schedule={schedule} />
    </>
  )
}

export default Main
