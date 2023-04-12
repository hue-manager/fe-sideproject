import { Button } from '@components/Button/Button'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { login, loginAdmin } from '../../api/auth'
import { setExpiration } from '../../utils/cookies'
import { ax } from '../../api/axiosClient'

interface Props {}

const errorMessage = [
  '',
  '비밀번호를 확인해주세요.',
  '이메일 혹은 비밀번호가 일치하지 않습니다.',
  '관리자 미승인 계정으로 로그인할 수 없습니다.',
]

const Home = (props: Props) => {
  // 유저 선택 상태 (true일반유저/false관리자)
  const [role, setRole] = useState(true)

  // 에러 메세지
  const [message, setMessage] = useState(0)
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  // 로그인 api 호출 함수
  const loginSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // 일반 유저 로그인
    if (role) {
      const formData = new FormData(event?.currentTarget)
      console.log(formData.get('email'))
      console.log(formData.get('password'))
      const res = await ax.login(
        formData.get('email') as string,
        formData.get('password') as string
      )
      console.log('login:', res)

      // 비밀번호 불일치
      if (res === 'wrong assword') {
        setMessage(1)
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 1000)
        return
      }
      // 이메일, 비밀번호 불일치
      if (res === 'fail') {
        setMessage(2)
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 1000)
        return
      }
      // 계정 미승인
      if (res === '계정 미승인') {
        setMessage(3)
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 1500)
        return
      }
      //로그인 성공시에 메인페이지로 이동
      if (res) {
        navigate('/main')
        console.log('야호')
      }
    } else {
      // 관리자 로그인
      const formData = new FormData(event?.currentTarget)
      const res = await ax.loginAdmin(
        formData.get('email') as string,
        formData.get('password') as string
      )
      // 비밀번호 불일치
      if (res === 'wrong password') {
        setMessage(1)
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 1000)
        return
      }
      // 이메일, 비밀번호 불일치
      if (res === 'fail') {
        setMessage(2)
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 1000)
        return
      }
      //로그인 성공시에 메인페이지로 이동
      if (res) {
        navigate('/main')
        console.log('야호')
      }
    }
  }

  return (
    <ContainerStyle>
      <BackgroundStyle />
      <InnerStyle>
        {/* 왼쪽 영역 */}
        <LeftStyle>
          <img src="/bg.jpg" alt="background" />
        </LeftStyle>
        {/* 로그인 영역 */}
        <RightStyle>
          <div>
            <LogoStyle>
              <img src="/logo_original.png" alt="logo" />
            </LogoStyle>
            {/* 로그인 유저 선택 */}
            <SelectedStyle>
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
            </SelectedStyle>
            {/* 입력 박스 */}
            <InputWrapStyle onSubmit={loginSubmitHandler}>
              <label>
                이메일
                <input type="text" name="email" />
              </label>
              <label>
                비밀번호
                <input type="password" name="password" />
              </label>
              <MessageStyle className={error ? 'active' : 'basic'}>
                <p>{errorMessage[message]}</p>
              </MessageStyle>
              <Button
                onClick={() => {
                  setExpiration()
                }}
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
            </InputWrapStyle>
          </div>
        </RightStyle>
      </InnerStyle>
    </ContainerStyle>
  )
}

const ContainerStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const BackgroundStyle = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/bg.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.4;
`

const InnerStyle = styled.section`
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
const LeftStyle = styled.div`
  width: 435px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 40px 0 0 40px;
  }
`

const RightStyle = styled.div`
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

const LogoStyle = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 0 80px;
  img {
    width: 270px;
  }
`
const SelectedStyle = styled.div`
  width: 100%;
  display: flex;
  padding: 0 80px 20px 80px;
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

const InputWrapStyle = styled.form`
  width: 100%;
  padding: 30px 80px;
  label {
    color: var(--color-black60);
    margin: 20px 0;
    display: block;
    :nth-child(2) {
      margin-bottom: 10px;
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
  button:hover {
    opacity: 0.7;
  }
`

const MessageStyle = styled.div`
  height: 30px;
  p {
    color: var(--color-primary);
  }
  &.active {
    opacity: 1;
    transition: ease-in 0.1s;
  }
  &.basic {
    opacity: 0;
    transition: ease-in-out 0.2s;
  }
`
export default Home
