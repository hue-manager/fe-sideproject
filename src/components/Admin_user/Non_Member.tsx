import Content from '../Content'
import React, { useEffect, useState } from 'react'
import Button_white from '../Button/Button_white'
import styled from 'styled-components'
import Avatar, { genConfig } from 'react-nice-avatar'
import instance from '../../../src/api/apiController'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '@src/react-query/constants'
import Pagination from '../UI/Pagination'

interface Props {}

type T = {
  content: {
    id: number
    email: string
    userName: string
    phoneNumber: string
    role: string
    vacationCount: number
    position: string
    department: string
  }[]
  totalElments: number
  totalPages: number
}

export const fetchNonMember = (page = 0): Promise<T> => {
  return instance.get(`/admins/users?page=` + page).then((response) => {
    return response.data
  })
}

const Non_Member = (props: Props) => {
  const theads = ['이름', '이메일', '소속/직급', '전화 번호', '가입 관리']
  const queryClient = useQueryClient()
  const [activePage, setActivePage] = useState<number>(1)

  const { data, status, isPreviousData } = useQuery({
    queryKey: ['non-members', activePage],
    queryFn: () => fetchNonMember(activePage),
    keepPreviousData: true,
    staleTime: 5000,
  })

  useEffect(() => {
    if (!isPreviousData) {
      queryClient.prefetchQuery({
        queryKey: ['non-members', activePage],
        queryFn: () => fetchNonMember(activePage - 1),
      })
    }
  }, [data, isPreviousData, activePage, queryClient])

  const totalPages = data?.totalPages

  return (
    <Content title={'비회원관리'} intro={'가입 신청을 승인할 수 있습니다.'}>
      <WrapperStyle>
        <TableStyle>
          <thead>
            <tr>
              <th></th>
              {theads.map((thead, index) => (
                <th key={index}>{thead}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {status === 'loading' ? (
              <tr>
                <td>
                  <div>Loading...</div>
                </td>
              </tr>
            ) : status === 'error' ? (
              <tr>
                <td>
                  <div>Error</div>
                </td>
              </tr>
            ) : (
              data.content.map((data, index) => (
                <tr key={index}>
                  <td>
                    <Avatar
                      style={{
                        width: '55px',
                        height: '55px',
                        margin: '10px auto',
                      }}
                      {...genConfig(data.userName)}
                    />
                  </td>
                  <td>{data.userName}</td>
                  <td>{data.email}</td>
                  <td>{`${data.department}/${data.position}`}</td>
                  <td>{data.phoneNumber}</td>
                  <td>
                    <Button_white text={'허가'} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </TableStyle>
        <Pagination activePage={activePage} setActivePage={setActivePage} pages={totalPages!} />
      </WrapperStyle>
    </Content>
  )
}

const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TableStyle = styled.table`
  border-collapse: separate;
  border-spacing: 0 30px;
  width: 100%;
  table-layout: fixed;

  tr {
    height: 3rem;
    box-shadow: rgba(116, 92, 242, 0.12) 5px 6px 10px;
    border-radius: 40px;
    vertical-align: middle;
    margin: 40px;
  }

  td {
    background-color: var(--color-white);
  }

  td:first-child {
    width: 200px;
  }

  td:not(:first-child) {
    vertical-align: middle;
    text-align: center;
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

export default Non_Member
