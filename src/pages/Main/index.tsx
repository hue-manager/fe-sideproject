import UserInfoSection from '@components/Main/UserInfoSection'
import CalendarSection from '@components/Main/CalendarSection'
import ApplySection from '@components/Main/ApplySection'
import { useEffect, useRef, useState } from 'react'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { ax } from '../../api/axiosClient'
import { getToken, getUserId } from '../../utils/cookies'
import axios from 'axios'

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
const Main = () => {
  const applySectionRef = useRef(null)
  const calendarSectionRef = useRef(null)
  const accessToken = getToken()

  // const [scheduleList, setScheduleList] = useState<Item[]>([])

  const { data: userInfo, isLoading: fetchingUser } = useQuery(['userInfo'], () =>
    ax.getUserInfo(accessToken)
  )

  // const {
  //   data: scheduleList,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  //   isFetching,
  // } = useInfiniteQuery(['schedules'], () => ax.getUserSchedules(accessToken), {
  //   getNextPageParam: (lastPage, allPages) => {
  //     const nextPage = lastPage.page + 1
  //     return nextPage < lastPage.totalPages ? nextPage : undefined
  //   },
  // })

  const fetchApply = async (pageParam: number = 0): Promise<ISearchResult> => {
    try {
      const userId = getUserId()
      const response = await fetch(
        `http://13.124.96.231:8080/schedules/userinfo/${userId}?page=${pageParam}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      const data = await response.json()
      return data
    } catch (error) {
      console.error('getUserSchedules error:', error)
      throw error
    }
  }
  const {
    data: scheduleList,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery(['applyInfo'], ({ pageParam }) => fetchApply(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      console.log('lastPage', lastPage)
      const nextPage = lastPage.totalPages > lastPage.number ? lastPage.number + 1 : null
      return nextPage
    },
  })

  if (fetchingUser || isFetching) return <p>Lodaing...</p>

  console.log('scheduleList')
  return (
    <>
      <UserInfoSection
        userInfo={userInfo}
        applySectionRef={applySectionRef}
        calendarSectionRef={calendarSectionRef}
      />
      <CalendarSection calendarRef={calendarSectionRef} />
      <ApplySection
        scheduleList={scheduleList}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        userInfo={userInfo}
        applyRef={applySectionRef}
      />
    </>
  )
}

export default Main
