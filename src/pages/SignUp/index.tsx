import { Button } from '@components/Button/Button'
import React, { useState } from 'react'
import styled from 'styled-components'
import { login } from '../../api/auth'
interface Props {}

type Signup = {
  email: string
  password: string
}
const SignUp = (props: Props) => {
  return (
    <Container>
      <Background />
      <Inner>
        <Visual>{/* <button>뒤로가기</button> */}</Visual>
        <Form>
          <Title>
            <p>계정 만들기</p>
          </Title>
          <InputWrap>
            <label>
              이메일
              <input type="text" id="email" />
            </label>
            <div className="flex">
              <label>
                비밀번호
                <input type="password" id="pwd" />
              </label>
              <label>
                비밀번호 확인
                <input type="password" id="pwdCheck" />
              </label>
            </div>
            <label>
              이름
              <input type="text" id="name" />
            </label>
            <label>
              휴대폰 번호
              <input type="text" id="number" />
            </label>
            <div className="flex">
              <label>
                소속
                <input type="text" id="division" />
              </label>
              <label>
                직급
                <input type="text" id="position" />
              </label>
            </div>
          </InputWrap>
          <Button
            backgroundColor={'var(--color-primary)'}
            size={'width'}
            label={'회원가입'}
            type={'submit'}
          />
        </Form>
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
    bottom: 10px;
    left: 230px;
    opacity: 0.4;
  }
`
const Visual = styled.div`
  width: 435px;
  height: 100%;
  /* background-color: lightgray; */
  display: flex;
`

const Form = styled.div`
  width: 800px;
  height: 100%;
  padding: 80px 0;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-content: flex-start;
  /* background-color: yellowgreen; */
  div {
    width: 100%;
  }
  button {
    margin: 0 80px;
  }
`

const Title = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 0 80px;
  p {
    font-weight: 600;
    font-size: 32px;
  }
`

const InputWrap = styled.div`
  width: 100%;
  padding: 30px 80px 20px 80px;
  label {
    color: var(--color-black60);
    display: block;
    padding: 10px 0;
    input {
      width: 100%;
      height: 40px;
      margin-top: 10px;
      margin-bottom: 5px;
      padding: 15px 20px;
      border: 1px solid var(--color-black60);
      border-radius: 10px;
      box-sizing: border-box;
      :focus {
        border: 1px solid var(--color-primary);
      }
    }
  }
  .flex {
    display: flex;
    width: 100%;
    gap: 25px;
    label {
      width: 100%;
      input {
        height: 40px;
      }
    }
  }
`

export default SignUp
