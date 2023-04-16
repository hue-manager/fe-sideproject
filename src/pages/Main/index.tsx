import UserInfoSection from '@components/Main/UserInfoSection'
import CalendarSection from '@components/Main/CalendarSection'
import ApplySection from '@components/Main/ApplySection'
import { useEffect, useRef, useState } from 'react'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { ax } from '../../api/axiosClient'
import { getToken, getUserId } from '../../utils/cookies'
import axios from 'axios'
import { addNewUser, getAllSchedule, getSchedule, getUser } from '../../api/firebase'

const mockUser = {
  user: {
    id: 6,
    email: 'manman@abc.com',
    userName: '만만이',
    phoneNumber: '010-3456-7857',
    role: 'ROLE_USER',
    vacationCount: 12,
    position: '사원',
    department: '재무팀',
  },
}

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

  const userName = '만만이'

  const { data } = useQuery(['all'], getAllSchedule)
  console.log('data', data)

  const { isLoading, data: userInfo } = useQuery(['user'], () => getUser(userName))
  const { isLoading: isScheduleLoading, data: schedule = [] } = useQuery(['user-schedule'], () =>
    getSchedule(userName)
  )
  if (isLoading) return <div>Loading...</div>
  if (isScheduleLoading) return <div>Loading...</div>

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
