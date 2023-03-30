import Content from '../Content'
import React from 'react'
import Button_white from '../Button/Button_white'
import styled from 'styled-components'
import Avatar, { genConfig } from 'react-nice-avatar'

interface Props {}

const Member = (props: Props) => {
  const theads = ['이름', '소속/직급', '가입 날짜', '권한', '계정삭제']

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
                      width: '70px',
                      height: '70px',
                      border: '3px solid var(--color-primary)',
                      margin: '20px auto',
                    }}
                    {...genConfig(data.name)}
                  />
                </td>
                <td>{data.name}</td>
                <td>{data.level}</td>
                <td>{data.date}</td>
                <td>{data.auth}</td>
                <td>
                  <Button_white text={'계정삭제'} />
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
    height: 70px;
    box-shadow: 5px 6px 10px rgba(116, 92, 242, 0.4);
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
    padding-left: 30px;
  }

  td:last-child,
  th:last-child {
    border-radius: 0 40px 40px 0;
    padding-right: 30px;
  }
`

export default Member
