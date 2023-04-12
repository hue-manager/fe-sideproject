import formatDateString from '../../utils/formatDateString'
import React from 'react'
import styled from 'styled-components'
import formatDate from '../../utils/formatDate'

interface Item {
  id: number
  category: string
  memo: string
  user: any
  startDate: string
  endDate: string
  status: string
}

interface IApplicationCard {
  item: Item
}
const ApplicationCard = () => {
  // const {
  //   id,
  //   category,
  //   memo,
  //   user: { createdAt, credentialsNonExpired, enabled, userName, position, department },
  //   startDate,
  //   endDate,
  //   status,
  // } = item
  const category = 'VACATION'
  return (
    <ApplicationCardStyle category={category}>
      <div>연차</div>
      <div>공혜지</div>
      <div>인사팀/사원</div>
      <div>병원 방문</div>
      <div>2023-01-25</div>
      <div>2023-01-31</div>
      <div>처리대기</div>
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
        category === 'VACATION' ? 'var(--color-primary)' : 'var(--color-pink)'};
      font-weight: 600;
    }
  }
`
