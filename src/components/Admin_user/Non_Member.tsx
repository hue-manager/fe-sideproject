import Content from '../Content'
import React from 'react'
import Button_white from '../Button/Button_white'
import styled from 'styled-components'
import Avatar, { genConfig } from 'react-nice-avatar'

interface Props {}

const Non_Member = (props: Props) => {
  const theads = ['이름', '이메일', '소속/직급', '가입 신청 날짜', '가입 관리']

  const mockData = [
    {
      name: '공혜지',
      level: '인사팀/사원',
      date: '2023.01.25.',
      email: 'hongchul@gmail.com',
    },
    {
      name: '이재용',
      level: '재무팀/과장',
      date: '2023.01.25.',
      email: 'hongchul@gmail.com',
    },
    {
      name: '만만이',
      level: '기획팀/과장',
      date: '2023.01.25.',
      email: 'hongchul@gmail.com',
    },
  ]

  return (
    <Content title={'비회원관리'} intro={'가입 신청을 승인할 수 있습니다.'}>
      <Wrapper>
        <Table>
          <thead>
            <tr>
              <th></th>
              {theads.map((thead, index) => (
                <th key={index}>{thead}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockData.map((data, index) => (
              <tr key={index}>
                <td>
                  <Avatar
                    style={{
                      width: '55px',
                      height: '55px',
                      margin: '10px auto',
                    }}
                    {...genConfig(data.name)}
                  />
                </td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.level}</td>
                <td>{data.date}</td>
                <td>
                  <Button_white text={'허가'} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Wrapper>
    </Content>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Table = styled.table`
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
