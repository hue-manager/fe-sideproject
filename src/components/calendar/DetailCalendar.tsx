import React from 'react'
import styled from 'styled-components'
import DetailItem from './DetailItem'

const DetailCalendar = () => {
  return (
    <Wrap>
      <Head>2023.3.20</Head>
      <Main>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <DetailItem key={item} />
        ))}
      </Main>
    </Wrap>
  )
}

const Wrap = styled.div`
  margin-left: 30px;
  width: 517px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #745cf2;
  border-radius: 15px;
  background-color: var(--color-lightpurple);
`
const Head = styled.div`
  margin-bottom: 120px;
  width: 80%;
  padding: 10px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #745cf2;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 5px 6px 10px rgba(116, 92, 242, 0.12);
`
const Main = styled.ul`
  height: 570px;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }
  ::-webkit-scrollbar-thumb {
    height: 10%; /* 스크롤바의 길이 */
    background: #745cf2; /* 스크롤바의 색상 */

    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: transperent; /*스크롤바 뒷 배경 색상*/
  }
  li {
    width: 95%;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    box-shadow: 5px 6px 10px rgba(116, 92, 242, 0.12);
    border-radius: 15px;
    strong {
      font-weight: bold;
      margin-right: 15px;
    }
  }
`

export default DetailCalendar
