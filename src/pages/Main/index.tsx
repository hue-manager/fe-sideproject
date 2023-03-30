import { Button } from '@components/Button/Button'
import { Action } from '@remix-run/router'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../../api/auth'

interface Props {}

type Data = {
  email: string
  password: string
}
const Main = (props: Props) => {
  const [userInfo, setUserInfo] = useState()
  const [role, setRole] = useState(true)
  const navigate = useNavigate()

  const loginSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event?.currentTarget)
    await login(formData.get('email') as string, formData.get('password') as string)
  }

  return (
    <Container>
      <Background />
      <Inner>
        <Visual>
          <img src="/bg.jpg" alt="background" />
        </Visual>
        <Login>
          <div>
            <Logo>
              <img src="/logo_original.png" alt="logo" />
            </Logo>
            <Selected>
              <button
                onClick={async () => {
                  // console.log(await login())
                }}
              >
                버튼
              </button>
              <p
                onClick={() => {
                  setRole(true)
                }}
                className={role ? 'active' : 'inactive'}
              >
                일반
              </p>
              <p
                onClick={() => {
                  setRole(false)
                }}
                className={!role ? 'active' : 'inactive'}
              >
                관리자
              </p>
            </Selected>
            <InputWrap onSubmit={loginSubmitHandler}>
              <label>
                이메일
                <input type="text" name="email" />
              </label>
              <label>
                비밀번호
                <input type="password" name="password" />
              </label>
              <Button
                backgroundColor={'var(--color-primary)'}
                size={'width'}
                label={'로그인'}
                type={'submit'}
              />
              <Button
                show={role}
                backgroundColor={'var(--color-black20)'}
                size={'width'}
                label={'회원가입하러 가기'}
                type={'button'}
                onClick={() => {
                  navigate('/signup')
                }}
              />
            </InputWrap>
          </div>
        </Login>
      </Inner>
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

const Inner = styled.section`
  min-width: 70vw;
  height: 80vh;
  background-color: var(--color-white);
  position: absolute;
  border-radius: 40px;
  display: flex;
  overflow: hidden;
  &::before {
    content: '';
    width: 200px;
    height: 200px;
    background-image: url('/hue.svg');
    background-size: 180px;
    background-repeat: no-repeat;
    position: absolute;
    top: 30px;
    left: 230px;
    opacity: 0.4;
  }
`
const Visual = styled.div`
  width: 435px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 40px 0 0 40px;
  }
`

const Login = styled.div`
  width: 800px;
  height: 100%;
  border-radius: 40px;
  padding: 80px;
  display: flex;
  justify-content: flex-end;
  div {
    width: 100%;
  }
`

const Logo = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 0 80px;
  img {
    width: 270px;
  }
`
const Selected = styled.div`
  width: 100%;
  display: flex;
  padding: 0 80px;
  p {
    cursor: pointer;
    width: 100%;
    padding: 15px 0;
    border-bottom: 2px solid var(--color-black10);
    text-align: center;
    border-radius: 20px 20px 0 0;
    color: var(--color-black50);
    :hover {
      border-bottom: 2px solid var(--color-primary);
      transition: 0.2s;
      color: var(--color-black);
    }
  }
  .active {
    border-bottom: 2px solid var(--color-primary);
    transition: 0.2s;
    color: var(--color-black);
  }
`

const InputWrap = styled.form`
  width: 100%;
  padding: 30px 80px;
  label {
    color: var(--color-black60);
    margin: 20px 0;
    display: block;
    :nth-child(2) {
      margin-bottom: 40px;
    }
  }
  input {
    margin-top: 10px;
    padding: 15px 20px;
    border: 1px solid var(--color-black60);
    border-radius: 10px;
    box-sizing: border-box;
    :focus {
      border: 1px solid var(--color-primary);
    }
  }
`
export default Main
