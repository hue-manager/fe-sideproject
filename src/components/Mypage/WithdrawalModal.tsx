import Modal from '../Modal'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { editUserInfo } from '../../api/mypage'
import { useState } from 'react'
import { Button } from '../Button/Button'

interface IEditInfo {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  email: string | undefined
  setCurrentEmail: any
  setCurrentName: any
  setUserInfo: any
}

export type FormValue = {
  email: string
  userName: string
}

const EditInfoModal = ({
  isOpen,
  setIsOpen,
  email,
  setCurrentEmail,
  setCurrentName,
}: IEditInfo) => {
  const [error, setError] = useState(true)
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<FormValue>()

  const onSubmit = async () => {
    console.log('onsubmit!')
    const values = getValues()
    // const response = await editUserInfo(values)
    setIsOpen(false)
    // setCurrentEmail(values.email)
    // setCurrentName(values.userName)
    // if (response === 'ok') {
    //   setIsOpen(false)
    //   setCurrentEmail(values.email)
    //   setCurrentName(values.userName)
    // } else {
    //   setError(true)
    //   setTimeout(() => {
    //     setError(false)
    //   }, 1000)
    // }
  }

  const handleModalClose = () => {
    setIsOpen(false)
  }
  // @ts-ignore
  const handleMockSubmit: any = (e) => {
    e.preventDefault()
    setIsOpen(false)
  }
  return (
    <ModalStyle type="회원탈퇴" visible={isOpen} onClose={handleModalClose}>
      <InputWrapStyle onSubmit={handleSubmit(onSubmit)}>
        <label>
          이메일
          <input type="text" {...register('email')} />
          <p className={errors.email ? 'active' : 'basic'}>
            기존과 다른 이메일을 올바른 형태로 입력해주세요.
          </p>
        </label>
        <label>
          이름
          <input type="text" {...register('userName')} placeholder="한글 2~6자로 입력해 주세요." />
          <p className={errors.userName ? 'active' : 'basic'}></p>
        </label>
        <Button
          backgroundColor={'var(--color-primary)'}
          size={'width'}
          label={'회원정보 수정하기'}
          type={'submit'}
          onClick={handleMockSubmit}
        />
      </InputWrapStyle>
    </ModalStyle>
  )
}

const ModalStyle = styled(Modal)``
const InputWrapStyle = styled.form`
  width: 100%;
  height: 100%;
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
      padding: 15px 20px;
      border: 1px solid var(--color-black60);
      border-radius: 10px;
      box-sizing: border-box;
      :focus {
        border: 1px solid var(--color-primary);
      }
    }
  }
  button {
    width: 100%;
    margin-top: 350px;
    :hover {
      opacity: 0.8;
    }
  }
  p {
    padding-top: 15px;
    &.active {
      color: var(--color-primary);
      transition: 0.2s;
    }
    &.basic {
      color: var(--color-primary);
      transition: 0.2s;
      opacity: 0;
    }
  }
`

export default EditInfoModal
