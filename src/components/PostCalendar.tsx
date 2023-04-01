import React, { useState } from 'react'
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import styled from 'styled-components'
import formatDateString from '../utils/formatDateString'

const localizer = momentLocalizer(moment)

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<any>(null)

  const handleSelectSlot = (event: any) => {
    setSelectedDate(formatDateString(event.start))
  }

  const handleNavigate = (date: Date, view: string, action: string) => {
    setSelectedDate(formatDateString(date.toString()))
  }

  console.log('selectedDate', selectedDate)

  return (
    <ContainerStyle>
      <CalendarStyle
        localizer={localizer}
        views={['month']} // 뭘 보여줄지 month, day 등
        formats={{ monthHeaderFormat: 'M' }}
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

export default MyCalendar

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
    margin: 1rem 0;
    .rbc-btn-group {
    }
    .rbc-toolbar-label {
    }
  }
  .rbc-month-view {
    padding: 1.5rem;
    .rbc-month-row {
      .rbc-day-bg.rbc-today {
        border-radius: 50%;
        background-color: var(--color-lightpurple);
      }
    }
  }
`
