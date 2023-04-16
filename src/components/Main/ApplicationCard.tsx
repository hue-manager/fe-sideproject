import formatDateString from '../../utils/formatDateString'
import React from 'react'
import styled from 'styled-components'
import formatDate from '../../utils/formatDate'

interface Item {
  id: number
  category: string
  memo: string
  userInfo: any
  startDate: string
  endDate: string
  status: string
}

interface IApplicationCard {
  item: Item
}
const ApplicationCard = ({ item }: IApplicationCard) => {
  const {
    id,
    category,
    memo,
    userInfo: { userName, position, department },
    startDate,
    endDate,
    status,
  } = item

  return (
    <ApplicationCardStyle category={category}>
      <div>{category}</div>
      <div>{userName}</div>
      <div>
        {department}/{position}
      </div>
      <div>{memo}</div>
      <div>{startDate}</div>
      <div>{endDate}</div>
      <div>{status}</div>
    </ApplicationCardStyle>
  )
}

export default ApplicationCard

const ApplicationCardStyle = styled.li<{ category: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  border-radius: 9999px;
  padding: 0 3rem;
  background-color: var(--color-white);
  box-shadow: 5px 6px 10px rgba(116, 92, 242, 0.12);
  border-radius: 40px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14.2%; //16.6%;;
    height: 100%;
    gap: 1.5rem;
    color: var(--color-black);
    :first-child {
      color: ${({ category }) =>
        category === '연차' ? 'var(--color-primary)' : 'var(--color-pink)'};
      font-weight: 600;
    }
  }
`
