import React, { useState } from 'react'
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import styled from 'styled-components'
import formatDateString from '../utils/formatDateString'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../main'
import { setSelectedDutyDate } from '../store/slice/selectedDutyDateSlice'

const localizer = momentLocalizer(moment)

const DutyPostCalendar = () => {
  const dispatch = useDispatch()

  const handleSelectSlot = (event: any) => {
    dispatch(setSelectedDutyDate(formatDateString(event.start)))
  }

  const handleNavigate = (date: Date, view: string, action: string) => {
    dispatch(setSelectedDutyDate(formatDateString(date.toString())))
  }

  return (
    <ContainerStyle>
      <CalendarStyle
        localizer={localizer}
        views={['month']} // 뭘 보여줄지 month, day 등
        formats={{ monthHeaderFormat: 'M', dateFormat: (date: Date) => moment(date).format('D') }}
        selectable
        onSelectSlot={handleSelectSlot}
        onNavigate={handleNavigate}
        messages={{
          agenda: '',
        }}
      />
    </ContainerStyle>
  )
}

export default DutyPostCalendar

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 350px;
`
const CalendarStyle = styled(Calendar)`
  width: 100%;
  .rbc-toolbar {
    position: relative;
    margin: 1rem 0;
    .rbc-btn-group {
      display: flex;
      align-items: center;
      button {
        border: none;
        outline: none;
      }
      button:first-child {
        display: none;
      }
      button:nth-child(2) {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        left: 70px;
        background: url('/public/calendar_arrow_left.svg') no-repeat center;
        font-size: 0;
      }
      button:nth-child(3) {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        right: 70px;
        background: url('/public/calendar_arrow_right.svg') no-repeat center;
        font-size: 0;
      }
    }
    .rbc-toolbar-label {
      font-size: 2.25rem;
      font-weight: 700;
    }
  }
  .rbc-month-view {
    border: 1px solid var(--color-primary);
    border-radius: 1rem;
    padding: 1.5rem;
    .rbc-month-row {
      .rbc-day-bg.rbc-today {
        border-radius: 50%;
        background-color: var(--color-lightpurple);
      }
    }
    .rbc-header {
      border: none;
    }
    .rbc-month-row {
      border: none;
    }
    .rbc-day-bg {
      border: none;
    }
    /* 요일 */
    .rbc-header {
      padding: 10px 0;
      font-size: 0;
    }
    .rbc-header::first-letter {
      border: none;
      font-size: 18px;
      color: var(--color-primary);
    }
    .rbc-month-header .rbc-header:first-child:first-letter {
      color: var(--color-pink);
    }
    /* 각 일자 */
    .rbc-month-row {
      justify-content: center;
      .rbc-row > div {
        text-align: center;
      }
      .rbc-row {
        .rbc-date-cell {
          padding: 0;
        }
      }
      .rbc-off-range-bg {
        background-color: var(--color-white);
      }
      .rbc-day-bg + .rbc-today {
        background-color: var(--color-white);
      }
    }
  }
`
