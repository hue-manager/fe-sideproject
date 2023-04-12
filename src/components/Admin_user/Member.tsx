import Content from '../Content'
import React, { useState } from 'react'
import Button_white from '../Button/Button_white'
import styled from 'styled-components'
import Avatar, { genConfig } from 'react-nice-avatar'
import instance from '../../../src/api/apiController'
import Pagination from '../UI/Pagination'
import { useQuery } from '@tanstack/react-query'
import _ from 'lodash'
import { current } from '@reduxjs/toolkit'
import userJson from '../../mokeup/admins/users.json'

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

type List = {
  [index: number]: D
}

type T = {
  ROLE_ADMIN: Array<D>
  ROLE_USER: Array<D>
  totalPages: number
}

export const fetchMembers = (): Promise<T> => {
  return instance
    .get(`/users/`)
    .then((response) => {
      return response.data.users.content.reduce((acc: any, curr: any) => {
        const { role }: any = curr
        if (acc[role]) acc[role].push(curr)
        else acc[role] = [curr]
        delete acc.DEFAULT
        // console.log(acc.ROLE_ADMIN.concat(acc.ROLE_USER))
        return acc
      }, {})
    })
    .catch(() => {
      return userJson.content
    })
}

// export const editRole = (data) => {
//   return instance
//     .post(`/users/${data.userId}/editrole`, {
//       role: { data.role },
//     })
//     .then((response) => {
//       return response
//     })
// }

const Member = (props: Props) => {
  const theads = ['이름', '이메일', '소속/직급', '전화번호', '권한']

  const [activePage, setActivePage] = useState<number>(1)
  const [selected, setSelected] = useState('관리자')

  const selectList = ['관리자', '일반']

  const handleSelect = (e: any) => {
    setSelected(e.target.value)
  }

  const { data, isLoading, error } = useQuery<T, Error>(['members'], fetchMembers)

  if (isLoading) return <h3>Loading...</h3>
  if (error) return <h3>Error {error.message}</h3>

  const createList = () => {
    let membersList: Array<D> = []
    if (data.ROLE_ADMIN && data.ROLE_USER) {
      return (membersList = data.ROLE_ADMIN.concat(data.ROLE_USER))
    } else if (data.ROLE_ADMIN) {
      return (membersList = data?.ROLE_ADMIN)
    } else if (data.ROLE_USER) {
      return (membersList = data?.ROLE_USER)
    }
    return membersList
  }
  const membersList = createList()

  const memebersLength = membersList.length
  const limit = 5
  const totalPages = Math.ceil(memebersLength! / limit)
  let pageGroups = []

  for (let pageGroup = 1; pageGroup <= totalPages; pageGroup++) {
    let tmp = []
    let offset = (pageGroup - 1) * limit
    let end = Math.min(offset + limit, memebersLength!)
    for (let page = offset; page < end; page++) {
      tmp.push(page)
    }
    pageGroups.push(tmp)
  }
  if (pageGroups.length <= 5) return
  let numbering = pageGroups[activePage - 1]
  let pageMembersList = numbering.map((number) => membersList[number])

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
            {pageMembersList?.map((data, index) => (
              <tr key={index}>
                <td>
                  <Avatar
                    style={{
                      width: '55px',
                      height: '55px',
                      margin: '10px auto',
                    }}
                    {...genConfig(data?.userName)}
                  />
                </td>
                <td>{data?.userName}</td>
                <td>{data?.email}</td>
                <td>{`${data?.department}/${data?.position}`}</td>
                <td>{data?.phoneNumber}</td>
                <td>
                  {data.role === 'ROLE_USER' ? '일반' : '관리자'}
                  <SelectStyle defaultValue={data.role === 'ROLE_USER' ? '일반' : '관리자'}>
                    {selectList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </SelectStyle>
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
  align-items: center;
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
const SelectStyle = styled.select`
  display: none;
  cursor: pointer;
`

export default Member
