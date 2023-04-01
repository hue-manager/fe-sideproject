import React from 'react'
import styled from 'styled-components'

const DetailCalendar = () => {
  return (
    <Wrap>
      <Head>2023.3.20</Head>
      <Main></Main>
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
const Main = styled.div`
  height: 570px;
  width: 441px;
`

export default DetailCalendar
