import React from 'react'
import Lottie from 'lottie-react'
import notfound from '../../assets/lottie/notfound.json'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

interface Props {}

const NotFound = (props: Props) => {
  const navigate = useNavigate()
  return (
    <Container>
      <Lottie animationData={notfound} className="lottie" />
      <button
        onClick={() => {
          navigate(-1)
        }}
      >
        뒤로가기
      </button>
    </Container>
  )
}

const Container = styled.div`
  width: 500px;
  height: 700px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .lottie {
    width: 600px;
    padding-top: 60px;
  }
  button {
    width: 400px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: var(--color-primary);
    color: var(--color-white);
    font-size: 16px;
    font-weight: 600;
    :hover {
      opacity: 0.7;
    }
  }
`
export default NotFound
