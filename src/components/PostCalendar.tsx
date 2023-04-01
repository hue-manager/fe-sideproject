import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import styled from 'styled-components'

const localizer = momentLocalizer(moment)

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleSelectEvent = (event: any) => {
    setSelectedDate(event.start)
  }

  return (
    <ContainerStyle>
      <CalendarStyle
        localizer={localizer}
        events={[]}
        views={['month']} // 뭘 보여줄지 month, day 등
        formats={{ monthHeaderFormat: 'M' }}
        selectable
        onSelectEvent={handleSelectEvent}
        messages={{
          agenda: '',
        }}
      />
      {selectedDate && <p>{moment(selectedDate).format('YYYY-MM-DD')}</p>}
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
  }
`
