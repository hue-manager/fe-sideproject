import { Button } from '@components/Button/Button'
import styled from 'styled-components'

interface Props {}

const Main = (props: Props) => {
  return (
    <Container>
      <Background />
      <Wrap>
        <img src="/bg.jpg" alt="background" />
        <Login>
          <Button primary={true} size={'large'} label={'large'} />
          <Button
            primary={false}
            backgroundColor={'var(--color-black30)'}
            size={'medium'}
            label={'medium'}
          />
          <Button
            primary={false}
            backgroundColor={'var(--color-primary)'}
            size={'small'}
            label={'small'}
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
