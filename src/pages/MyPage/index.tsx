import React from 'react'
import styled from 'styled-components'
import Avatar, { genConfig } from 'react-nice-avatar'
import Content from '@components/Content'

interface Props {}

const MyPage = (props: Props) => {
  const config = genConfig('qwer1234@qwer1234.com')
  return (
    <Page>
      <Sidebar />
      <Container>
        <Content title={'내 정보'} intro={'내 정보를 확인하고 수정할 수 있습니다.'}>
          <Profile>
            <Avatar
              style={{
                width: '10rem',
                height: '10rem',
                border: '3px solid var(--color-primary)',
                margin: '20px 0',
              }}
              {...config}
            />
            <Info>
              <div>
                <p className="title">이름</p>
                <p>우지수</p>
              </div>
              <div>
                <p className="title">소속</p>
                <p>개발팀</p>
              </div>
              <div>
                <p className="title">직급</p>
                <p>사원</p>
              </div>
            </Info>
          </Profile>
        </Content>
      </Container>
    </Page>
  )
}
const Page = styled.div`
  width: 100%;
  display: flex;
  align-content: flex-start;
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

const Profile = styled.div`
  display: flex;
  width: 450px;
  height: auto;
  background-color: var(--color-white);
  border-radius: 20px;
  justify-content: center;
  padding: 20px 10px 10px 10px;
  flex-wrap: wrap;
  align-items: flex-start;
`

const Info = styled.div`
  width: 100%;
  div {
    display: flex;
    background-color: var(--color-black10);
    padding: 15px 20px;
    margin: 10px 20px;
    border-radius: 10px;
    justify-content: space-between;
    p {
      color: var(--color-black90);
    }
  }
  .title {
    font-weight: 500;
  }
`
export default MyPage
