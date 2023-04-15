import Content from '@components/Content'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button_primary from '@components/Button/Button_primary'
import instance from '@/api/apiController'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { atom, useRecoilState } from 'recoil'
import { scheduleState } from '@/atoms/atom'
import { CSVLink } from 'react-csv'

interface Props {}

type D = {
  category: string
  endDate: string
  id: number
  memo: string
  startDate: string
  status: string
  createdAt: string
  department: string
  email: string
  modifiedAt: string
  position: string
  userName: string
}

type T = {
  contnet: Array<D>
  totalElements: number
  totalPages: number
}

async function fetchSchedules(page = 0) {
  return instance.get(`/admins/schedules?page=` + page).then((response) => {
    return response.data
  })
}
console.log('instance', instance)
const Admin = (props: Props) => {
  const theads = ['요청종류', '요청자', '소속/직급', '요청 사유', '요청 날짜', '상태', '관리']

  // const queryClient = useQueryClient()
  // const [activePage, setActivePage] = useState<number>(1)

  // const { data, status } = useQuery({
  //   queryKey: ['schedules', activePage],
  //   queryFn: () => fetchSchedules(activePage),
  //   keepPreviousData: true,
  //   staleTime: 5000,
  // })

  const [mockData, setMockData] = useRecoilState(scheduleState)
  const totalPages = 3
  return (
    <Content
      title={'승인요청'}
      intro={'연차, 당직 신청 내역을 확인하고 승인이나 거절할 수 있습니다.'}
    >
      <WrapperStyle>
        <CSVButton data={mockData} filename="승인요청 스케쥴.csv">
          엑셀로 내보내기
        </CSVButton>
        <TableStyle>
          <thead>
            <tr>
              {theads.map((thead, index) => (
                <th key={index}>{thead}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockData.map((data, index): any => (
              <tr key={index}>
                <td className={data.species === '당직' ? 'pink' : 'purple'}>{data.species}</td>
                <td>{data.person}</td>
                <td>{data.level}</td>
                <td>{data.reason}</td>
                <td>{data.date}</td>
                <td>{data.state}</td>
                <td>{data.state === '처리대기' ? '승인 | 거절' : data.state}</td>
              </tr>
            ))}
          </tbody>
        </TableStyle>
      </WrapperStyle>
    </Content>
  )
}

const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const CSVButton = styled(CSVLink)`
  cursor: pointer;
  width: 7rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-sizing: content-box;
  &:hover {
    filter: brightness(1.1);
  }
`


const TableStyle = styled.table`
  border-collapse: separate;
  border-spacing: 0 30px;
  width: 100%;
  margin: 0 auto;
  tr {
    height: 3rem;
    box-shadow: rgba(116, 92, 242, 0.12) 5px 6px 10px;
    border-radius: 40px;
    text-align: center;
  }
  td {
    vertical-align: middle;
    background-color: var(--color-white);
    &.purple {
      color: var(--color-primary);
    }
    &.pink {
      color: var(--color-pink);
    }
  }
  th {
    vertical-align: middle;
    font-weight: 600;
  }

  thead > tr {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  tbody::before {
    content: '.';
    display: block;
    color: transparent;
    line-height: 5px;
  }

  td:first-child,
  th:first-child {
    border-radius: 40px 0 0 40px;
    padding-left: 40px;
  }

  td:last-child,
  th:last-child {
    border-radius: 0 40px 40px 0;
    padding-right: 40px;
  }
`

export default Admin
