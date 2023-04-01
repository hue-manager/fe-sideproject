import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './MonthCalendar.css'
import { useDispatch } from 'react-redux'
import { setTitle, setData } from '../../store/slice/calendarSlice'

const MonthCalendar = () => {
  const localizer = momentLocalizer(moment)
  const dispatch = useDispatch()

  // data 가져올 때 allDay : true 기본
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
    month: {
      event: () => {
        return null
      },
    },
  }
  const months: { [key: string]: string } = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jum: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  }

  const onNavigate = (newDate: any, newView: any) => {
    const date = newDate.toString()
    const [, month, day, year] = date.split(' ')
    const resTitle = `${year}.${Number(months[`${month}`])}.${Number(day)}`
    const resData = `${year}-${months[`${month}`]}-${day}`
    dispatch(setTitle(resTitle))
    dispatch(setData(resData))
  }

  return (
    <Calendar
      onNavigate={onNavigate}
      components={components}
      events={events}
      localizer={localizer}
      defaultView={'month'}
      selectable={true}
      showAllEvents={true}
      views={['month']}
      formats={{
        monthHeaderFormat: (date: Date) => moment(date).format('M'),
        dateFormat: (date: Date) => moment(date).format('D'),
      }}
      startAccessor="start"
      endAccessor="end"
      style={{ height: '80%', width: '80%' }}
    />
  )
}

export default MonthCalendar
