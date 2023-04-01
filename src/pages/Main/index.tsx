import UserInfoSection from '@components/Main/UserInfoSection'
import CalendarSection from '@components/Main/CalendarSection'
import ApplySection from '@components/Main/ApplySection'
import { useEffect, useRef, useState } from 'react'

interface Props {}

const Main = (props: Props) => {
  const applySectionRef = useRef(null)
  const calendarSectionRef = useRef(null)
  return (
    <>
      <UserInfoSection applySectionRef={applySectionRef} calendarSectionRef={calendarSectionRef} />
      <CalendarSection calendarRef={calendarSectionRef} />
      <ApplySection applyRef={applySectionRef} />
    </>
  )
}

export default Main
