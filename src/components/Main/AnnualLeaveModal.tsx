import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import Select from '../UI/Select'
import AnnualPostCalendar from '../AnnualPostCalendar'
import { useSelector } from 'react-redux'
import { RootState } from '../../main'
import Button from '../UI/Button'
import { ax } from '../../api/axiosClient'
import { getToken } from '../../utils/cookies'
import { atom, useRecoilState } from 'recoil'
import { eventsState } from '../../atoms/atom'
import { addNewSchedule, addUpdateUserInfo } from '../../api/firebase'

interface IAnnualLeaveModal {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  userInfo: any
}

const AnnualLeaveModal = ({ userInfo, isOpen, setIsOpen }: IAnnualLeaveModal) => {
  // const accessToken = getToken()
  const [data, setData] = useRecoilState(eventsState)
  let category = '연차'

  const [currentValue, setCurrentValue] = useState('정규 스케쥴')
  const { startDate, endDate } = useSelector((state: RootState) => state.selectedAnnualDate)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!currentValue) {
      alert('신청사유를 입력해주세요.')
    } else if (!startDate || !endDate) {
      alert('신청 날짜를 선택해주세요.')
    } else {
      // setData((prev) => [
      //   ...prev,
      //   {
      //     id: 35,
      //     category: 'VACATION',
      //     user: {
      //       createdAt: '2023-04-01T09:45:21.835961',
      //       modifiedAt: '2023-04-04T08:48:40.991376',
      //       id: 4,
      //       email: 'jisooround123@jisooround.com',
      //       userName: '송혜교',
      //       password: '$2a$10$POOOM6xY/sOz9eBOesejIORODNkEiVZjv7CtkcF8G2zrGidEvtQcG',
      //       phoneNumber: '010-5028-7344',
      //       role: 'ROLE_USER',
      //       vacationCount: 9,
      //       position: '사원',
      //       department: '개발',
      //       enabled: true,
      //       username: '송혜교',
      //       accountNonLocked: true,
      //       authorities: [
      //         {
      //           authority: 'USER',
      //         },
      //       ],
      //       accountNonExpired: true,
      //       credentialsNonExpired: true,
      //     },
      //     startDate: startDate,
      //     endDate: endDate,
      //     memo: currentValue,
      //     status: 'WAITING',
      //   },
      // ])
      userInfo.overview.application++
      let memo = currentValue
      addNewSchedule(userInfo, startDate, endDate, category, memo)
      addUpdateUserInfo(userInfo.userName, userInfo)
      alert('연차 신청에 성공했습니다.')
      setIsOpen(false)

      // @ts-ignore 신청 count 증가 하기
      // setUserInfo((prev) => {
      //   const { application } = prev.overview
      //   prev.overview.application = application + 1
      //   return { ...prev }
      // })
    }
  }

  const handleModalClose = () => {
    setIsOpen(false)
  }
  const selectOptions = ['정규 스케쥴', '업무 지시', '비상 근무', '기타']

  return (
    <Modal type="연차 신청" visible={isOpen} onClose={handleModalClose}>
      <FormStyle onSubmit={handleSubmit}>
        <SelectBoxStyle>
          <span>신청 사유</span>
          <Select
            options={selectOptions}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
            width="100%"
            height="3rem"
            borderRadius=".5rem"
            fontSize="16px"
          />
        </SelectBoxStyle>
        <InputStyle>
          <div>
            <div>
              <span>신청 날짜</span>
              <input type="text" readOnly value={startDate ? startDate : ''} />
            </div>
            <div>
              <span>종료 날짜</span>
              <input type="text" readOnly value={endDate ? endDate : ''} />
            </div>
          </div>
          <p>신청날짜와 종료날짜를 드래그하여 선택하실 수 있습니다.</p>
        </InputStyle>

        <AnnualPostCalendar />
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
  flex-direction: column;
  gap: 1rem;
  & > div {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
    div {
      span {
        font-size: 1rem;
        font-weight: 600;
      }
      & > input {
        margin-top: 0.5rem;
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
  }
  p {
    align-self: center;
    font-weight: 600;
    font-size: 0.75rem;
  }
`

const ApplyBtnStyle = styled.div`
  display: flex;
  align-items: center;
`

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
  & > div:nth-child(3) {
    align-self: center;
    height: 74%;
    padding-bottom: 2rem;
  }
  ${ApplyBtnStyle} {
    height: 6%;
  }
`
