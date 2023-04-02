import { Button } from '@components/Button/Button'
import { RxDoubleArrowLeft } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useForm, SubmitHandler } from 'react-hook-form'
import Select from '@components/UI/Select'
import { useState } from 'react'

type FormValue = {
  email: string
  password: string
  passwordConfirm: string
  name: string
  number: number
  department: string
  position: string
}

// 부서 셀렉 박스
const departmentOptions = ['개발', '인사', '디자인', '기획', '회계', '법무']
// 직급 셀렉 박스
const positionOptions = ['사원', '대리', '과장', '차장', '부장', '이사']

const SignUp = () => {
  const navigate = useNavigate()
  const [departmentValue, setDepartmentValue] = useState('개발')
  const [positionValue, setPositionValue] = useState('사원')

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValue>()

  const onSubmit: SubmitHandler<FormValue> = (data) => console.log(data)

  const formData = new FormData()
  console.log(formData)

  console.log(watch('email'))
  return (
    <ContainerStyle>
      <BackgroundStyle />
      <InnerStyle>
        <LeftStyle>
          <div
            className="back"
            onClick={() => {
              navigate('/')
            }}
          >
            <RxDoubleArrowLeft className="icon" />
            <p>로그인 화면으로 돌아가기</p>
          </div>
          <TitleStyle>
            <p>계정 만들기</p>
          </TitleStyle>
        </LeftStyle>
        <RightStyle>
          <InputWrapStyle onSubmit={handleSubmit(onSubmit)}>
            <label>
              {/* 이메일 */}
              <input
                type="text"
                {...register('email', {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                })}
                placeholder="이메일"
              />
              <p className={errors.email ? 'active' : 'basic'}>올바른 이메일을 입력해주세요.</p>
            </label>
            <div className="flex">
              <label>
                {/* 비밀번호 */}
                <input
                  type="password"
                  {...register('password', {
                    required: true,
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/,
                  })}
                  placeholder="비밀번호"
                />
                <p className={errors.password ? 'active' : 'basic'}>
                  영문, 숫자, 특수문자 조합 8~15자로 입력해 주세요.
                </p>
              </label>
              <label>
                {/* 비밀번호 확인 */}
                <input
                  type="password"
                  {...register('passwordConfirm', {
                    required: true,
                    validate: (value) => value === watch('password'),
                  })}
                  placeholder="비밀번호 확인"
                />
                <p className={errors.passwordConfirm ? 'active' : 'basic'}>
                  비밀번호가 일치하지 않습니다.
                </p>
              </label>
            </div>
            <label>
              {/* 이름 */}
              <input
                type="text"
                {...register('name', {
                  required: true,
                  pattern: /^[가-힣]{2,6}$/,
                })}
                placeholder="이름"
              />
              <p className={errors.name ? 'active' : 'basic'}>한글 2~6자로 입력해 주세요.</p>
            </label>
            <label>
              {/* 휴대폰 번호 */}
              <input
                type="text"
                {...register('number', {
                  required: true,
                  pattern: /^01(?:0|1|6)-(?:\d{3}|\d{4})-\d{4}$/,
                })}
                placeholder="휴대폰 번호"
              />
              <p className={errors.number ? 'active' : 'basic'}>
                '010-0000-0000' 형태로 입력해 주세요.
              </p>
            </label>
            <div className="flex">
              <label>
                {/* <p className="select">소속</p> */}
                <Select
                  options={departmentOptions}
                  currentValue={departmentValue}
                  setCurrentValue={setDepartmentValue}
                  width="100%"
                  height="40px;"
                  borderRadius="10px"
                  fontSize="14px"
                  {...register('department', {
                    required: true,
                    validate: (value) => value !== '소속',
                  })}
                />
                <p className={errors.department ? 'active' : 'basic'}>소속팀을 선택해 주세요.</p>
              </label>
              <label>
                {/* <p className="select">직급</p> */}
                <Select
                  options={positionOptions}
                  currentValue={positionValue}
                  setCurrentValue={setPositionValue}
                  width="100%"
                  height="40px;"
                  borderRadius="10px"
                  fontSize="14px"
                  {...register('position', {
                    required: true,
                    validate: (value) => value === '개발',
                  })}
                />
                <p className={errors.position ? 'active' : 'basic'}>직급을 선택해 주세요.</p>
              </label>
            </div>
            <Button
              backgroundColor={'var(--color-primary)'}
              size={'width'}
              label={'회원가입'}
              type={'submit'}
            />
          </InputWrapStyle>
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
const LeftStyle = styled.div`
  width: 435px;
  height: 100%;
  .back {
    display: flex;
    cursor: pointer;
    position: absolute;
    top: -35px;
    left: 15px;
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
    user-select: none;
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

const TitleStyle = styled.div`
  width: 100%;
  margin-top: 70px;
  padding: 0 80px;
  p {
    font-weight: 600;
    font-size: 32px;
  }
`

const RightStyle = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-content: flex-start;
  div {
    width: 100%;
  }
`

const InputWrapStyle = styled.form`
  width: 100%;
  padding: 60px 80px 20px 80px;
  label {
    color: var(--color-black60);
    display: block;
    padding: 10px 0;
    position: relative;
    .select {
      padding-bottom: 10px;
    }
    input {
      display: flex;
      align-content: center;
      width: 100%;
      height: 40px;
      font-weight: 600;
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
  button {
    margin-top: 100px;
    :hover {
      opacity: 0.8;
    }
  }
  p {
    margin-top: 10px;
    &.active {
      color: var(--color-primary);
      transition: 0.2s;
    }
    &.basic {
      color: var(--color-primary);
      transition: 0.2s;
      opacity: 0;
    }
    &.select {
      margin-top: 0;
    }
  }
`

export default SignUp
