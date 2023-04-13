import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { useDispatch } from 'react-redux'
import { setTitle, setData } from '../../store/slice/calendarSlice'
import styled from 'styled-components'
import { IEventsData } from './TotalCalendar'

interface IMonthCalendarProps {
  events: IEventsData[]
  switchData: string
  setSwitchData: React.Dispatch<React.SetStateAction<string>>
}

const MonthCalendar = ({ events, switchData, setSwitchData }: IMonthCalendarProps) => {
  const localizer = momentLocalizer(moment)
  const dispatch = useDispatch()

  const components = {
    month: {
      event: () => {
        return null
      },
    },
  }

  const onNavigate = (newDate: any, newView: any) => {
    const resTitle = `${newDate.getFullYear()}.${newDate.getMonth() + 1}.${newDate.getDate()}`
    const resData = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
    dispatch(setTitle(resTitle))
    dispatch(setData(resData))
  }

  console.log(events)

  return (
    <Wrap>
      <Head switchData={switchData}>
        <button
          onClick={() => {
            setSwitchData('my')
            dispatch(setTitle(''))
            dispatch(setData(''))
          }}
        >
          나의 일정만 보기
        </button>
        <button
          onClick={() => {
            setSwitchData('all')
            dispatch(setTitle(''))
            dispatch(setData(''))
          }}
        >
          다른 직원 일정도 함께 보기
        </button>
      </Head>
      <CalendarStyle
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
      />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-primary);
  border-radius: 15px;
  background-color: var(--color-lightpurple);
`

const Head = styled.div<{ switchData: string }>`
  width: 80%;
  border: 1px solid var(--color-primary);
  border-radius: 40px;
  display: flex;
  button {
    width: 100%;
    border: none;
    outline: none;
    padding: 13px 0;
    font-size: 14px;
    font-weight: bold;
    :first-child {
      background-color: ${({ switchData }) =>
        switchData === 'my' ? 'var(--color-primary)' : 'var(--color-white)'};
      border-radius: 40px 0px 0px 40px;
      color: ${({ switchData }) =>
        switchData === 'my' ? 'var(--color-white)' : 'var(--color-primary)'};
    }
    :last-child {
      background-color: ${({ switchData }) =>
        switchData === 'all' ? 'var(--color-primary)' : 'var(--color-white)'};
      border-radius: 0px 40px 40px 0px;
      color: ${({ switchData }) =>
        switchData === 'all' ? 'var(--color-white)' : 'var(--color-primary)'};
    }
  }
`

const CalendarStyle = styled(Calendar)`
  height: 80%;
  width: 80%;
  * {
    outline: none;
  }
  /* 달 적혀있는 곳 */
  .rbc-toolbar {
    position: relative;
    margin: 40px 0;
    .rbc-toolbar-label {
      font-size: 38px;
      font-weight: bold;
      color: var(--color-primary);
    }
    .rbc-btn-group {
      position: absolute;
      top: 20%;
      right: 50%;
      transform: translateX(50%);
      button {
        border: none;
        padding: 0;
        :nth-child(1) {
          display: none;
        }
        :nth-child(2) {
          width: 18px;
          height: 18px;
          position: absolute;
          right: 70px;
          background: url('/public/calendar_arrow_left.svg') no-repeat center;
          font-size: 0;
        }
        :nth-child(3) {
          width: 18px;
          height: 18px;
          position: absolute;
          left: 70px;
          background: url('/public/calendar_arrow_right.svg') no-repeat center;
          font-size: 0;
        }
      }
    }
  }

  /* 달력 전체 */
  .rbc-month-view {
    padding: 50px;
    border: 1px solid var(--color-primary);
    border-radius: 15px;
    background-color: var(--color-white);

    * {
      border: none;
      outline: none;
    }
  }

  /* 요일 */
  .rbc-header {
    padding: 10px 0;
    font-size: 0;
    ::first-letter {
      font-size: 18px;
      color: var(--color-primary);
    }
    :first-child:first-letter {
      color: var(--color-pink);
    }
  }

  /* 각 일자 */
  .rbc-month-row {
    justify-content: center;
    .rbc-row > div {
      text-align: center;
    }
    .rbc-date-cell {
      padding-right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .rbc-date-cell.rbc-current {
      position: relative;
      color: var(--color-white);
      ::after {
        content: '';
        width: 75%;
        height: 85%;
        position: absolute;
        left: 11%;
        top: 10%;
        z-index: -1;
        background-color: var(--color-primary);
        border-radius: 10px;
      }
    }
    .rbc-off-range-bg {
      background-color: var(--color-white);
    }
    .rbc-day-bg + .rbc-today {
      background-color: var(--color-white);
    }
    .rbc-today {
      height: 40px;
      background-color: var(--color-lightpurple);
      border-radius: 10px;
    }
    .rbc-button-link {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      position: relative;
      transition: 0.5s;
      :hover {
        color: var(--color-white);
      }
      :hover::after {
        content: '';
        position: absolute;
        width: 75%;
        height: 85%;
        left: 11%;
        top: 10%;
        z-index: -1;
        background-color: var(--color-primary);
        border-radius: 10px;
        opacity: 0;
      }
      :hover::after {
        opacity: 1;
      }
    }
  }

  /* 이벤트 */
  .rbc-event {
    position: relative;
  }
  .rbc-event,
  .rbc-day-slot,
  .rbc-background-event,
  .rbc-event.rbc-selected,
  .rbc-day-slot .rbc-selected.rbc-background-event {
    background-color: var(--color-primary);
  }
  .rbc-row-content-scrollable .rbc-row-content-scroll-container {
    overflow: hidden;
  }
  .rbc-event.rbc-selected:focus {
    outline: none;
  }
`

export default MonthCalendar
