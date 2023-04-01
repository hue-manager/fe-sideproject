import { Button } from '@components/Button/Button'
import { RxDoubleArrowLeft } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Select from '@components/UI/Select'

interface SelectBox {
  show: boolean | undefined
  value: string | undefined
}

type FormValue = {
  email: string
  password: string
  passwordConfirm: string
  name: string
  number: number
  department: string
  position: string
}

const departmentList = [
  { id: 0, value: '개발' },
  { id: 1, value: '인사' },
  { id: 2, value: '디자인' },
  { id: 3, value: '기획' },
  { id: 4, value: '회계' },
  { id: 5, value: '법무' },
]

const positionList = [
  { id: 0, value: '사원' },
  { id: 1, value: '대리' },
  { id: 2, value: '과장' },
  { id: 3, value: '차장' },
  { id: 4, value: '부장' },
  { id: 5, value: '이사' },
]
const selectOptions = ['정규 스케쥴', '업무 지시', '비상 근무', '기타']
const SignUp = () => {
  const navigate = useNavigate()

  const { register, watch } = useForm<FormValue>()
  const [department, setDepartment] = useState<SelectBox | null>({
    show: false,
    value: '소속을 선택해 주세요.',
  })
  const [position, setPosition] = useState<SelectBox | null>({
    show: true,
    value: '직급을 선택해 주세요.',
  })
  console.log(watch('email'))
  return (
    <Container>
      <Background />
      <Inner>
        <Visual>
          <div
            onClick={() => {
              navigate('/')
            }}
          >
            <RxDoubleArrowLeft className="icon" />
            <p>로그인 화면으로 돌아가기</p>
          </div>
        </Visual>
        <Form>
          <Title>
            <p>계정 만들기</p>
          </Title>
          <InputWrap>
            <label>
              이메일
              <input type="text" {...register('email')} placeholder="이메일을 입력해주세요." />
            </label>
            <div className="flex">
              <label>
                비밀번호
                <input
                  type="password"
                  {...register('password')}
                  placeholder="비밀번호를 입력해주세요."
                />
              </label>
              <label>
                비밀번호 확인
                <input
                  type="password"
                  {...register('passwordConfirm')}
                  placeholder="한 번 더 비밀번호를 입력해주세요."
                />
              </label>
            </div>
            <label>
              이름
              <input type="text" {...register('name')} placeholder="이름을 입력해주세요." />
            </label>
            <label>
              휴대폰 번호
              <input
                type="text"
                {...register('number')}
                placeholder="휴대폰 번호를 입력해주세요."
              />
            </label>
            <div className="flex">
              <label>
                소속
                <input
                  {...register('department')}
                  className="selectBox"
                  value={department?.value}
                  readOnly
                />
                <SelectBox id="department" style={{ display: `${department?.show}` }}>
                  {departmentList.map((item) => (
                    <li key={item.id}>{item.value}</li>
                  ))}
                </SelectBox>
              </label>
              <label>
                직급
                <input
                  type="text"
                  {...register('position')}
                  value={position?.value}
                  readOnly
                  onClick={(prevState) => {
                    // setDepartment()
                  }}
                />
                <Select
                  options={selectOptions}
                  initial={'정규 스케쥴'}
                  width="100%"
                  height="3rem"
                  borderRadius=".5rem"
                  fontSize="16px"
                />
                <SelectBox id="position">
                  {positionList.map((item) => (
                    <li key={item.id}>{item.value}</li>
                  ))}
                </SelectBox>
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
  div {
    display: flex;
    cursor: pointer;
    position: absolute;
    top: 100px;
    left: 50px;
    font-size: 18px;
    font-weight: 400;
    color: var(--color-black50);
    background: linear-gradient(
      to right,
      var(--color-primary),
      midnightblue 50%,
      var(--color-black50) 50%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
    :hover {
      background-position: 0 100%;
      color: var(--color-primary);
      font-weight: 500;
    }
    .icon {
      margin: 0 20px 0 0;
    }
  }
`

const Form = styled.div`
  width: 800px;
  height: 100%;
  padding: 80px 0;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-content: flex-start;
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
    position: relative;
    input {
      display: flex;
      align-content: center;
      width: 100%;
      height: 40px;
      font-size: 14px;
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

const SelectBox = styled.ul`
  width: 100%;
  height: 130px;
  display: none;
  overflow-y: auto;
  position: absolute;
  border-radius: 10px;
  border: 1px solid var(--color-primary);
  background-color: var(--color-white);
  li {
    padding: 15px 20px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    :hover {
      background-color: var(--color-black10);
    }
  }
  ::-ms-value {
    color: var(--color-primary);
  }
`

export default SignUp
