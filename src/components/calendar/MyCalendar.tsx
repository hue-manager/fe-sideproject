import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer, DateLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Header } from '../../stories/Header'
import './MyCalendar.css'
import styled from 'styled-components'
import { within } from '@storybook/testing-library'

const MyDateHeader = ({ label, date }: { label: string; date: string }) => {
  return (
    <div>
      <button className="rbc-button-link" role="cell">
        {label}
      </button>
    </div>
  )
}

const MyCalendar = () => {
  const localizer = momentLocalizer(moment)

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

  const test = (info: any): any => {
    console.log(info)
  }

  const component = {
    // event: (props: any) => {
    //   // console.log(props)
    //   return null
    // },
    month: {
      event: (props: any) => {
        // console.log('month: ', props)
        return null
      },
    },
    // day: {
    //   event: (props: any) => {
    //     console.log(props)
    //     return null
    //   },
    // },
  }

  return (
    <Calendar
      components={component}
      tooltipAccessor={(): any => null}
      // eventPropGetter={test}
      events={events}
      localizer={localizer}
      defaultView={'month'}
      selectable={true}
      showAllEvents={true}
      drilldownView="agenda"
      messages={{
        previous: '<',
        next: '>',
        today: 'today',
      }}
      views={['month', 'day']} // 뭘 보여줄지 month, day 등
      // date={moment('2023-01-15').toDate()} // 해당 날짜로 이동
      formats={{
        monthHeaderFormat: (date: Date) => moment(date).format('M'),
        dateFormat: (date: Date) => moment(date).format('D'),
      }}
      // onSelectEvent={test} // 해당 이벤트를 클릭했을 때 옆에 목록 보여주면 될 듯
      // selectable={true} // onSelectSlot 할 때 꼭 넣어줘야 함
      onSelectSlot={test} // 해당 일 슬롯을 클릭했을 때 그 슬롯의 정보를 참조
      onShowMore={(events, date) => console.log(events, date)} // 더보기 눌렀을 때 정보 더 나오는 것
      // toolbar={false}
      popup={true} // 이벤트 더보기 눌렀을 때 밑에 팝업 안 뜨게
      startAccessor="start"
      endAccessor="end"
      // getNow={() => new Date('2023-04-13')} // 오늘을 가져오는 듯?
      titleAccessor="title"
      style={{ height: 688, width: 441 }}
    />
  )
}

export default MyCalendar
