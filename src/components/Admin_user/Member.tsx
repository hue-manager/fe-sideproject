import Content from '../Content'
import React, { useState } from 'react'
import Button_white from '../Button/Button_white'
import styled from 'styled-components'
import Avatar, { genConfig } from 'react-nice-avatar'
import instance from '../../../src/api/apiController'
import Pagination from '../UI/Pagination'
import { useQuery } from '@tanstack/react-query'
import _ from 'lodash'
// import { useMembers } from '../../../src/hooks/useMembers'

interface Props {}

type D = {
  id: number
  email: string
  userName: string
  phoneNumber: string
  role: string
  vacationCount: number
  position: string
  department: string
}

type T = {
  ROLE_ADMIN: Array<D>
  ROLE_USER: Array<D>
  totalPages: number
}

export const fetchMembers = () => {
  return instance.get('/users/').then((response) => {
    return response.data.users.content.reduce((acc: any, curr: any) => {
      const { role }: any = curr
      if (acc[role]) acc[role].push(curr)
      else acc[role] = [curr]
      delete acc.DEFAULT
      // console.log(acc.ROLE_ADMIN.concat(acc.ROLE_USER))
      return acc
    }, {})
  })
}

export const useMembers = () => {
  const { data, isLoading } = useQuery<T, Error>(['members'], fetchMembers)
  if (isLoading) return

  return data?.ROLE_ADMIN.concat(data.ROLE_USER)
}

const Member = (props: Props) => {
  const theads = ['이름', '소속/직급', '가입 날짜', '권한', '계정삭제']

  const [activePage, setActivePage] = useState<number>(1)

  const membersList = useMembers()
  // console.log(membersList.ROLE_ADMIN.concat(membersList.ROLE_USER))
  // const memberLength =

  const totalPages = Math.ceil(membersList!.length / 10)

  const mockData = [
    {
      name: '공혜지',
      level: '인사팀/사원',
      date: '2023.01.25',
      auth: '관리자',
    },
    {
      name: '나다',
      level: '재무팀/과장',
      date: '2023.01.25',
      auth: '일반',
    },
    {
      name: '가다',
      level: '기획팀/과장',
      date: '2023.01.25',
      auth: '일반',
    },
  ]

  return (
    <Content title={'회원관리'} intro={'관리자 권한을 부여할 수 있습니다.'}>
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
            {membersList?.map((data, index) => (
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
                <td>{`${data.department}/${data.position}`}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.role === 'ROLE_ADMIN' ? '관리자' : '일반'}</td>
                <td>
                  <Button_white text={'계정삭제'} />
                </td>
              </tr>
            ))}
          </tbody>
        </TableStyle>
        <Pagination activePage={activePage} setActivePage={setActivePage} pages={totalPages} />
      </WrapperStyle>
    </Content>
  )
}

const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const TableStyle = styled.table`
  position: relative;
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

export default Member
