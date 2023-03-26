import { Button } from '../../stories/Button'
// 절대경로 설정이 왜 안 먹히는지 모르겠음
import React from 'react'
import styled from 'styled-components'

interface Props {}

const Main = (props: Props) => {
  return (
    <Container>
      <Background />
      <Wrap>
        <img src="/bg.jpg" alt="background" />
        <Login>
          <Button
            primary={false}
            backgroundColor={'var(--color-primary)'}
            size={'small'}
            label={'press me'}
          />
        </Login>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/bg.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.4;
`

const Wrap = styled.section`
  width: 80vw;
  height: 80vh;
  background-color: var(--color-white);
  position: absolute;
  border-radius: 40px;
  display: flex;
  img {
    height: 100%;
    border-radius: 40px 0 0 40px;
  }
`

const Login = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-black10);
  border-radius: 40px;
`
export default Main
