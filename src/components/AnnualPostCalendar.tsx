import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import styled from 'styled-components'
import formatDateString from '../utils/formatDateString'
import { useDispatch, useSelector } from 'react-redux'
import { setEndDate, setStartDate } from '../store/slice/selectedAnnualDateSlice'

const localizer = momentLocalizer(moment)

const AnnualPostCalendar = () => {
  const dispatch = useDispatch()

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    const day = 1000 * 60 * 60 * 24 // 1일의 밀리초
    const range = Math.ceil((end.getTime() - start.getTime()) / day) // 선택 범위 내 일 수
    const selectedDates = [start]

    for (let i = 1; i < range; i++) {
      const date = new Date(start.getTime() + i * day)
      selectedDates.push(date)
    }
    dispatch(setStartDate(formatDateString(selectedDates[0])))
    dispatch(setEndDate(formatDateString(selectedDates[selectedDates?.length - 1])))
  }

  return (
    <ContainerStyle>
      <CalendarStyle
        localizer={localizer}
        views={['month']} // 뭘 보여줄지 month, day 등
        formats={{ monthHeaderFormat: 'M', dateFormat: (date: Date) => moment(date).format('D') }}
        selectable
        selected={[]}
        onSelectSlot={handleSelectSlot}
        messages={{
          agenda: '',
        }}
      />
    </ContainerStyle>
  )
}

export default AnnualPostCalendar

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
    border: 1px solid #745cf2;
    border-radius: 1rem;
    padding: 1.5rem;
    .rbc-selected-cell {
      background-color: var(--color-lightpurple);
    }
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
      color: #745cf2;
    }
    .rbc-month-header .rbc-header:first-child:first-letter {
      color: #ff99e5;
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
        background-color: #ffffff;
      }
      .rbc-day-bg + .rbc-today {
        background-color: #ffffff;
      }
    }
  }
`

// const ContainerStyle = styled.div`
//   display: flex;
//   /* flex-direction: column; */
//   align-items: center;
//   /* justify-content: center; */
//   width: 80%;
//   height: 100%;
// `
// const CalendarStyle = styled(Calendar)`
//   /* width: 100%; */

//   .rbc-toolbar {
//     position: relative;
//     margin: 1rem 0;
//     .rbc-btn-group {
//       display: flex;
//       align-items: center;
//       button {
//         border: none;
//         outline: none;
//       }
//       button:first-child {
//         display: none;
//       }
//       button:nth-child(2) {
//         width: 1.5rem;
//         height: 1.5rem;
//         position: absolute;
//         left: 70px;
//         background: url('/public/calendar_arrow_left.svg') no-repeat center;
//         font-size: 0;
//       }
//       button:nth-child(3) {
//         width: 1.5rem;
//         height: 1.5rem;
//         position: absolute;
//         right: 70px;
//         background: url('/public/calendar_arrow_right.svg') no-repeat center;
//         font-size: 0;
//       }
//     }
//     .rbc-toolbar-label {
//       font-size: 2.25rem;
//       font-weight: 700;
//     }
//   }

//   .rbc-month-view {
//     border: 1px solid #745cf2;
//     border-radius: 1rem;
//     padding: 1.5rem;
//     .rbc-month-row {
//       .rbc-row .rbc-date-cell {
//         padding: 3px !important;
//       }
//       .rbc-day-bg.rbc-today {
//         border-radius: 0.5rem;
//         background-color: transparent;
//       }
//       .rbc-date-cell.rbc-current {
//         background-color: var(--color-primary);
//         color: var(--color-white);
//         border-radius: 0.3rem;
//       }
//     }
//     .rbc-header {
//       border: none;
//     }
//     .rbc-month-row {
//       border: none;
//     }
//     .rbc-day-bg {
//       border: none;
//     }
//     /* 요일 */
//     .rbc-header {
//       padding: 10px 0;
//       font-size: 0;
//     }
//     .rbc-header::first-letter {
//       border: none;
//       font-size: 18px;
//       color: #745cf2;
//     }
//     .rbc-month-header .rbc-header:first-child:first-letter {
//       color: #ff99e5;
//     }
//     /* 각 일자 */
//     .rbc-month-row {
//       justify-content: center;
//       .rbc-row > div {
//         text-align: center;
//       }
//       .rbc-row {
//         .rbc-date-cell {
//           padding: 0;
//         }
//       }
//       .rbc-off-range-bg {
//         background-color: #ffffff;
//       }
//       .rbc-day-bg + .rbc-today {
//         background-color: #ffffff;
//       }
//     }
//   }
// `
