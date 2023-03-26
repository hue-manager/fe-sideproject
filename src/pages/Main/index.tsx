import React from 'react'
import styled from 'styled-components'

interface Props {}

const Main = (props: Props) => {
  return (
    <Container>
      <Background />
      <Wrap>
        <Design>
          <img src="/bg.jpg" alt="background" />
        </Design>

        <Login></Login>
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
`
const Design = styled.div`
  height: 100%;
  img {
    height: 100%;
    border-radius: 40px 0 0 40px;
  }
  .svg {
    position: absolute;
    width: 150px;
  }
`
const Login = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-blak50);
`
export default Main
