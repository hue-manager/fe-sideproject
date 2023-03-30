import Content from '../../../src/components/Content'
import React from 'react'
import styled from 'styled-components'
import Button_primary from '../../components/Button/Button_primary'

interface Props {}

const Admin = (props: Props) => {
  const theads = ['요청종류', '요청자', '소속/직급', '요청 사유', '요청 날짜', '상태', '관리']

  const mockData = [
    {
      species: '연차',
      person: '공혜지',
      level: '인사팀/사원',
      reason: '병원 방문',
      date: '2023.01.25',
      state: '처리대기',
    },
    {
      species: '당직',
      person: '공혜지',
      level: '개발팀/사원',
      reason: '각종 경조사',
      date: '2023.01.25',
      state: '승인',
    },
    {
      species: '연차',
      person: '규규규',
      level: '개발팀/사원',
      reason: '개인 업무',
      date: '2023.01.25',
      state: '거절',
    },
  ]

  return (
    <Content
      title={'승인요청'}
      intro={'연차, 당직 신청 내역을 확인하고 승인이나 거절할 수 있습니다.'}
    >
      <Wrapper>
        <Button_primary text={'엑셀로 내보내기'} />
        <Table>
          <thead>
            <tr>
              {theads.map((thead, index) => (
                <th key={index}>{thead}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockData.map((data, index) => (
              <tr key={index}>
                <td>{data.species}</td>
                <td>{data.person}</td>
                <td>{data.level}</td>
                <td>{data.reason}</td>
                <td>{data.date}</td>
                <td>{data.state}</td>
                <td>{data.state === '처리대기' ? '승인/거절' : data.state}</td>
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
  width: 900px;
  tr {
    height: 70px;
    box-shadow: 5px 6px 10px rgba(116, 92, 242, 0.4);
    border-radius: 40px;
    text-align: center;
    margin: 40px;
  }
  td {
    vertical-align: middle;
    background-color: var(--color-white);
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
  }

  td:last-child,
  th:last-child {
    border-radius: 0 40px 40px 0;
  }
`

export default Admin
