import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import PostCalendar from '../DutyPostCalendar'
import Select from '../UI/Select'
import AnnualPostCalendar from '../AnnualPostCalendar'
import { useSelector } from 'react-redux'
import { RootState } from '../../main'
import { useForm } from 'react-hook-form'
import Button from '../UI/Button'

type FormData = {
  start: string
  end: string
}

interface IDutyDateModal {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const AnnualLeaveModal = ({ isOpen, setIsOpen }: IDutyDateModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onValid = (data: FormData) => {
    const { start, end } = data

    const startDate = new Date(start)
    const endDate = new Date(end)

    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime())
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))

    if (diffDays > 3) {
      alert('날짜 차이가 3일 이내가 아닙니다.')
      return
    }

    // 유효성 검사를 통과한 경우 실행될 코드
    console.log('Submit success!')
    alert(JSON.stringify(data))
  }

  const { startDate, endDate } = useSelector((state: RootState) => state.selectedAnnualDate)

  const handleModalClose = () => {
    setIsOpen(false)
  }
  const selectOptions = ['정규 스케쥴', '업무 지시', '비상 근무', '기타']
  return (
    <Modal type="연차 신청" visible={isOpen} onClose={handleModalClose}>
      <FormStyle onSubmit={handleSubmit(onValid)}>
        <SelectBoxStyle>
          <span>신청 사유</span>
          <Select
            options={selectOptions}
            initial={'정규 스케쥴'}
            width="100%"
            height="3rem"
            borderRadius=".5rem"
            fontSize="16px"
          />
        </SelectBoxStyle>
        <InputStyle>
          <div>
            <span>신청 날짜</span>
            <input
              type="text"
              readOnly
              value={startDate ? startDate : ''}
              // name="startDate"
              {...register('start')}
            />
          </div>
          <div>
            <span>신청 날짜</span>
            <input
              type="text"
              readOnly
              value={endDate ? endDate : ''}
              // name="endDate"
              {...register('end', { required: true })}
              // {...(register &&
              //   register('end', {
              //     required: 'dasdasdsa',
              //   }))}
            />
          </div>
        </InputStyle>
        <CalendarSectionStyle>
          <AnnualPostCalendar type="start" />
          <AnnualPostCalendar type="end" />
        </CalendarSectionStyle>
        {/* <CalendarSection2Style>
          <AnnualPostCalendar />
        </CalendarSection2Style> */}
        <ApplyBtnStyle>
          <Button
            type="submit"
            width="100%"
            height="3rem"
            borderRadius="9999px"
            bgColor="var(--color-primary)"
            color="var(--color-white)"
          >
            신청하기
          </Button>
        </ApplyBtnStyle>
      </FormStyle>
    </Modal>
  )
}

export default AnnualLeaveModal

const SelectBoxStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 1rem;
    font-weight: 600;
    width: 15%;
  }
  & > div {
    width: 85%;
  }
`

const InputStyle = styled.div`
  display: flex;
  gap: 1rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0.25rem;
    span {
      font-size: 1rem;
      font-weight: 600;
    }
    & > input {
      height: 2.5rem;
      border-radius: 0.5rem;
      border: 1px solid var(--color-primary);
      padding: 12px 16px;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.2;
      color: var(--color-primary);
    }
    :first-child {
      width: 50%;
    }
    :last-child {
      width: 50%;
    }
  }
`

const CalendarSectionStyle = styled.section`
  display: flex;
  gap: 1rem;
`

const ApplyBtnStyle = styled.div`
  display: flex;
  align-items: center;
`

/**test */
// const CalendarSection2Style = styled.section``

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  ${SelectBoxStyle} {
    height: 6%;
    margin-bottom: 1rem;
  }
  ${InputStyle} {
    height: 14%;
    margin-bottom: 1rem;
  }
  ${CalendarSectionStyle} {
    height: 74%;
    margin-bottom: 1.5rem;
  }
  ${ApplyBtnStyle} {
    height: 6%;
  }
`
