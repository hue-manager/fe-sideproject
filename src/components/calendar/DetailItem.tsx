import React from 'react'
import styled from 'styled-components'

export enum CalendarCategory {
  'VACATION' = '연차',
  'WORK' = '당직',
}

interface IDetailItemProps {
  category: string
  userName: string
  department: string
  position: string
  startDate: string
  endDate: string
}

const DetailItem = ({
  category,
  userName,
  department,
  position,
  startDate,
  endDate,
}: IDetailItemProps) => {
  // const start = `${startDate.getFullYear()}.${startDate.getMonth() + 1}.${startDate.getDate()}`
  // const end = `${endDate.getFullYear()}.${endDate.getMonth() + 1}.${endDate.getDate()}`

  const start = startDate.split('-')
  const end = endDate.split('-')

  const startYear = start[0].slice(2, 4)
  const endYear = end[0].slice(2, 4)

  start.splice(0, 1, startYear)
  end.splice(0, 1, endYear)

  return (
    <Wrap className="is_event">
      <div>
        <strong>{category}</strong>
        <span>
          {userName}({department}/{position})
        </span>
      </div>
      <span>
        {start.join('.')} - {end.join('.')}
      </span>
    </Wrap>
  )
}

const Wrap = styled.li`
  width: 98%;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 5px 6px 10px rgba(116, 92, 242, 0.12);
  border-radius: 15px;
  color: black;
  outline: none;

  strong {
    font-weight: bold;
    margin-right: 15px;
  }
`

export default DetailItem
