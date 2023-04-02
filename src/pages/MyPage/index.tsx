import styled from 'styled-components'
import Avatar, { genConfig } from 'react-nice-avatar'
import Content from '@components/Content'
import { Button } from '@components/Button/Button'
import Timer from '@components/Timer'
import Lottie from 'lottie-react'
import mypage from '../../assets/lottie/mypage.json'

interface Props {}

const MyPage = (props: Props) => {
  const config = genConfig('qwer1234@qwer1234.com')

  console.log()
  return (
    <Page>
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
                <p className="title">이메일</p>
                <p>qwer1234@qwer1234.com</p>
              </div>
              <div>
                <p className="title">소속</p>
                <p>개발팀</p>
              </div>
              <div>
                <p className="title">직급</p>
                <p>사원</p>
              </div>
              <Button
                backgroundColor={'var(--color-primary)'}
                size={'width'}
                label={'개인정보 수정하기'}
                type={'submit'}
              />
              <Button
                backgroundColor={'var(--color-black30)'}
                size={'width'}
                label={'회원탈퇴하기'}
                type={'submit'}
              />
            </Info>
          </Profile>
        </Content>
      </Container>
      <Lottie animationData={mypage} className="lottie" />
    </Page>
  )
}
const Page = styled.div`
  width: 100%;
  display: flex;
  align-content: flex-start;
  .lottie {
    width: 100%;
    opacity: 0.6;
  }
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
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div {
    width: 100%;
    display: flex;
    background-color: var(--color-black10);
    padding: 15px 20px;
    margin: 8px 20px;
    border-radius: 10px;
    justify-content: space-between;
    box-sizing: border-box;
    p {
      color: var(--color-black90);
    }
    &:nth-child(4) {
      margin-bottom: 20px;
    }
  }

  .title {
    font-weight: 500;
  }
  button {
    width: 100%;
    box-sizing: border-box;
    padding: 15px 20px;
    margin: 5px 20px;
    border-radius: 10px;
    :hover {
      opacity: 0.7;
    }
  }
  &:nth-child(2) {
    margin-bottom: 20px;
  }
`
export default MyPage
