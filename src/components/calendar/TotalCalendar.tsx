import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MonthCalendar from './MonthCalendar'
import DetailCalendar from './DetailCalendar'
import { useQuery } from '@tanstack/react-query'
import { getAllSchedule } from '../../api/auth'
import { CalendarCategory } from './DetailItem'
import { getUserSchedule } from './../../api/auth'
import { getUserId } from '../..//utils/cookies'
import allSchedule from '../../mokeup/users-schedules/all.json'
import userSchedule from '../../mokeup/users-schedules/userinfo.json'
import { useRecoilState } from 'recoil'
import { eventsState } from '../../atoms/atom'

export interface IEventsData {
  title: number
  start: Date
  end: Date
  allDay: boolean
  data: {
    category: string
    userName: string
    department: string
    position: string
  }
}

const TotalCalendar = ({ setUserInfo }: any) => {
  const [switchData, setSwitchData] = useState<string>('my')
  const [events, setEvents] = useState<IEventsData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setEvents([])

    fetch(`src/mokeup/users-schedules/${switchData === 'my' ? 'scheduleInfo' : 'all'}.json`)
      .then((res) => res.json())
      .then((data) => {
        for (const event of data.content) {
          const setData = {
            title: event.id,
            start: event.startDate,
            end: event.endDate,
            allDay: true,
            data: {
              category: CalendarCategory[`${event.category as keyof typeof CalendarCategory}`],
              userName: event.user.userName || '',
              department: event.user.department,
              position: event.user.position,
            },
          }
          setEvents((prev: IEventsData[]) => [...prev, setData])
        }

        setLoading(false)
      })
  }, [switchData])

  return (
    <>
      {loading ? null : (
        <Wrap>
          <MonthCalendar
            events={events}
            switchData={switchData}
            setSwitchData={setSwitchData}
            setUserInfo={setUserInfo}
          />
          <DetailCalendar events={events} setUserInfo={setUserInfo} />
        </Wrap>
      )}
    </>
  )
}

const Wrap = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
`

export default TotalCalendar
