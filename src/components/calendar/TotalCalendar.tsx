import React from 'react'
import styled from 'styled-components'
import MyCalendar from './MyCalendar'
import DetailCalendar from './DetailCalendar'

const TotalCalendar = () => {
  return (
    <Wrap>
      <Left>
        <Head>
          <button>나의 일정만 보기</button>
          <button>다른 직원 일정도 함께 보기</button>
        </Head>
        <MyCalendar />
      </Left>

      <DetailCalendar />
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
`

const Left = styled.div`
  width: 517px;
  height: 888px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #745cf2;
  border-radius: 15px;
`

const Head = styled.div`
  width: 80%;
  border: 1px solid #745cf2;
  border-radius: 40px;
  display: flex;
  button {
    width: 100%;
    border: none;
    outline: none;
    padding: 13px 0;
    font-size: 14px;
    :first-child {
      background-color: #745cf2;
      border-radius: 40px 0px 0px 40px;
      color: #fff;
    }
    :last-child {
      background-color: #fff;
      border-radius: 0px 40px 40px 0px;
      color: #745cf2;
    }
  }
`

export default TotalCalendar
