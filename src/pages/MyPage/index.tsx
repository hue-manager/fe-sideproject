import React from 'react'
import styled from 'styled-components'

interface Props {}

const MyPage = (props: Props) => {
  return (
    <Page>
      <Sidebar />
      <Container></Container>
    </Page>
  )
}
const Page = styled.div`
  width: 100%;
  display: flex;
`
const Sidebar = styled.div`
  width: 270px;
  height: 100vh;
  background-color: var(--color-primary);
`
const Container = styled.div`
  width: calc(100% - 270px);
  height: 100vh;
`

export default MyPage
