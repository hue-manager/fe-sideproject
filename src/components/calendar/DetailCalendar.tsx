import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import DetailItem from './DetailItem'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import './DetailCalendar.css'
import { calendarSlice, selectCalendar } from './../../store/slice/calendarSlice'
import { useSelector } from 'react-redux'
import Lottie from 'lottie-react'
import calendar from '../../assets/lottie/calendar.json'

const DetailCalendar = () => {
  const localizer = momentLocalizer(moment)
  const calendarDate = useSelector(selectCalendar)

  const events = [
    {
      title: 'My Event',
      start: new Date('2023-04-4'),
      end: new Date('2023-04-10'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-4'),
      end: new Date('2023-04-4'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-4'),
      end: new Date('2023-04-4'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-4'),
      end: new Date('2023-04-4'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },

    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'My Event',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      // resource: (event: any) => console.log(event),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'sdkfls',
      start: new Date('2023-04-13'),
      end: new Date('2023-04-13'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: '니아러니알',
      start: new Date('2023-04-15'),
      end: new Date('2023-04-15'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-15'),
      end: new Date('2023-04-15'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },

    {
      title: 'ㄴㅇㄹㄴㅇ',
      start: new Date('2023-04-30'),
      end: new Date('2023-04-30'),
      data: {
        type: '연차',
        name: '김민지',
        affiliation: '디자인팀',
        position: '주임',
      },
    },
  ]

  const components = {
    day: {
      event: ({ event }: { event: any }) => {
        return <DetailItem />
      },
    },
  }
  return (
    <Wrap className="detail_calender">
      {calendarDate.title ? (
        <>
          <Head>{calendarDate.title}</Head>
          <Calendar
            dayLayoutAlgorithm={'no-overlap'}
            components={components}
            date={
              new Date(calendarDate.data) ? new Date(calendarDate.data) : new Date('2023-04-04')
            }
            onNavigate={() => new Date()}
            events={events}
            localizer={localizer}
            defaultView={'day'}
            selectable={true}
            showAllEvents={true}
            views={['day']}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '92%', width: '85%' }}
          />
        </>
      ) : (
        <>
          <p>
            각 일자의 연차/당직 상세를 보고 싶다면
            <br />
            옆의 달력에서 일자를 먼저 선택해주세요
          </p>
          <Lottie animationData={calendar} className="lottie" />
        </>
      )}
    </Wrap>
  )
}

const Wrap = styled.div`
  margin-left: 30px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #745cf2;
  border-radius: 15px;
  background-color: var(--color-lightpurple);
  p {
    margin-bottom: 40px;
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    color: var(--color-primary);
  }
  .lottie {
    width: 60%;
  }
`
const Head = styled.div`
  margin-top: 50px;
  margin-bottom: 120px;
  width: 80%;
  padding: 10px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #745cf2;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 5px 6px 10px rgba(116, 92, 242, 0.12);
`

export default DetailCalendar
