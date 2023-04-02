import React, { useCallback, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import DetailItem from './DetailItem'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { calendarSlice, selectCalendar } from './../../store/slice/calendarSlice'
import { useSelector } from 'react-redux'
import Lottie from 'lottie-react'
import notSelect from '../../assets/lottie/calendar_not_select.json'
import empty from '../../assets/lottie/empty.json'
import { IEventsData } from './TotalCalendar'

interface IDetailCalendarProps {
  events: IEventsData[]
}

const DetailCalendar = ({ events }: IDetailCalendarProps) => {
  const localizer = momentLocalizer(moment)
  const calendarDate = useSelector(selectCalendar)

  const [isEvent, setIsEvent] = useState(true)

  const components = {
    day: {
      event: ({ event }: any) => {
        // console.log(event)
        return (
          <DetailItem
            category={event.data.category}
            userName={event.data.userName}
            department={event.data.department}
            position={event.data.position}
            startDate={event.start}
            endDate={event.end}
          />
        )
      },
    },
  }

  useEffect(() => {
    const eventEl = document.querySelector('.is_event')
    if (eventEl) setIsEvent(true)
    else setIsEvent(false)
  }, [calendarDate.title])

  return (
    <Wrap>
      {calendarDate.title ? (
        <>
          <Head>{calendarDate.title}</Head>
          <CalendarStyle
            dayLayoutAlgorithm={'no-overlap'}
            components={components}
            date={new Date(calendarDate.data) ? new Date(calendarDate.data) : new Date()}
            onNavigate={() => new Date()}
            events={events}
            localizer={localizer}
            defaultView={'day'}
            selectable={true}
            showAllEvents={true}
            views={['day']}
          />
          {isEvent ? null : <Lottie animationData={empty} className="lottie_empty" />}
        </>
      ) : (
        <>
          <p>
            각 일자의 연차/당직 상세를 보고 싶다면
            <br />
            옆의 달력에서 일자를 먼저 선택해주세요
          </p>
          <Lottie animationData={notSelect} className="lottie_not_select" />
        </>
      )}
    </Wrap>
  )
}

const Wrap = styled.div`
  margin-left: 30px;
  padding: 55px 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  border: 1px solid var(--color-primary);
  border-radius: 15px;
  background-color: var(--color-lightpurple);
  position: relative;

  p {
    margin-top: 170px;
    margin-bottom: 40px;
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    color: var(--color-primary);
  }
  .lottie_not_select {
    width: 60%;
  }
  .lottie_empty {
    width: 70%;
    height: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
`
const Head = styled.div`
  width: 80%;
  margin-bottom: 120px;
  padding: 10px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: var(--color-primary);
  background-color: var(--color-white);
  border-radius: 50px;
  box-shadow: 5px 6px 10px rgba(116, 92, 242, 0.12);
`

const CalendarStyle = styled(Calendar)`
  height: 520px;
  width: 85%;

  * {
    outline: none;
  }

  /* 필요없는 부분 삭제 */
  .rbc-time-content {
    display: none;
  }
  .rbc-label {
    display: none;
  }
  .rbc-time-header.rbc-overflowing {
    border: none;
    margin-right: 0;
  }
  .rbc-btn-group {
    display: none;
  }
  /* 헤더 커스텀 */
  .rbc-toolbar {
    display: none;
    width: 100%;
    margin-bottom: 120px;
    padding: 10px;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: var(--color-primary);
    background-color: var(--color-white);
    border-radius: 50px;
    box-shadow: 5px 6px 10px rgba(116, 92, 242, 0.12);
  }
  /* 리스트 커스텀 */
  .rbc-time-view {
    width: 102%;
    height: 570px;
    overflow-y: scroll;
    border: none;
    ::-webkit-scrollbar {
      width: 7px; /* 스크롤바의 너비 */
    }
    ::-webkit-scrollbar-thumb {
      height: 10%; /* 스크롤바의 길이 */
      background: var(--color-primary); /* 스크롤바의 색상 */
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      background: transperent; /*스크롤바 뒷 배경 색상*/
    }
  }
  .rbc-event,
  .rbc-day-slot .rbc-background-event {
    background-color: transparent;
    outline: none;
  }
  .rbc-time-header-content {
    border: none;
  }
  .rbc-today {
    background-color: transparent;
  }
`

export default DetailCalendar
