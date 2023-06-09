import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Modal from '../Modal'
import { RootState } from '../../main'
import PostCalendar from '../DutyPostCalendar'
import Select from '../UI/Select'
import Button from '../UI/Button'
import { ax } from '../../api/axiosClient' //'@src/api/axiosClient'
import { getToken } from '../../utils/cookies'
import { useRecoilState } from 'recoil'
import { eventsState } from '../../atoms/atom'
import { addNewSchedule, addUpdateUserInfo } from '../../api/firebase'

interface IDutyDateModal {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  userInfo: any
}

const DutyDateModal = ({ isOpen, setIsOpen, userInfo }: IDutyDateModal) => {
  const [data, setData] = useRecoilState(eventsState)
  let category = '당직'
  const accessToken = getToken()
  const { selectedDutyDate } = useSelector((state: RootState) => state.selectedDutyDate)
  const handleModal2Close = () => {
    setIsOpen(false)
  }
  const selectOptions = ['병원 방문', '각종 경조사', '개인 업무', '개인 사유']
  const [currentValue, setCurrentValue] = useState('병원 방문')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!currentValue) {
      alert('신청사유를 입력해주세요.')
    } else if (!selectedDutyDate) {
      alert('신청 날짜를 선택해주세요.')
    } else {
      userInfo.overview.application++
      let memo = currentValue
      let startDate = selectedDutyDate
      let endDate = selectedDutyDate
      addNewSchedule(userInfo, startDate, endDate, category, memo)
        .then(() => {
          alert('당직 신청에 성공했습니다.')
          setIsOpen(false)
        })
        .catch((error) => {
          alert('당직 신청에 실패하셨습니다')
        })
      addUpdateUserInfo(userInfo.userName, userInfo)

      // setData([
      //   ...data,
      //   {
      //     id: 37,
      //     category: 'WORK',
      //     user: {
      //       createdAt: '2023-04-01T09:45:21.835961',
      //       modifiedAt: '2023-04-04T08:48:40.991376',
      //       id: 4,
      //       email: 'jisooround123@jisooround.com',
      //       userName: '송혜교2',
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
      //     startDate: selectedDutyDate,
      //     endDate: selectedDutyDate,
      //     memo: currentValue,
      //     status: 'PERMIT',
      //   },
      // ])

      // if (response.status === 200) {
    }
  }

  return (
    <Modal type="당직 신청" visible={isOpen} onClose={handleModal2Close}>
      <ChildrenStyle onSubmit={handleSubmit}>
        <SelectBoxStyle>
          <span>신청 사유</span>
          <Select
            options={selectOptions}
            width="100%"
            height="3rem"
            borderRadius=".5rem"
            fontSize="16px"
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
        </SelectBoxStyle>
        <InputStyle>
          <span>신청 날짜</span>
          <input type="text" readOnly value={selectedDutyDate ? selectedDutyDate : ''} />
        </InputStyle>
        <PostCalendar />
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
      </ChildrenStyle>
    </Modal>
  )
}

export default DutyDateModal

const InputStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
  span {
    font-size: 1rem;
    font-weight: 600;
    width: 15%;
  }
  & > input {
    width: 85%;
    height: 3rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color-primary);
    padding: 12px 16px;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.2;
    color: var(--color-primary);
  }
`

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

const ApplyBtnStyle = styled.div`
  display: flex;
  align-items: center;
`

const ChildrenStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  ${SelectBoxStyle} {
    height: 6%;
    margin-bottom: 1rem;
  }

  ${InputStyle} {
    height: 6%;
    margin-bottom: 1rem;
  }
  & > div:nth-child(3) {
    align-self: center;
    height: 82%;
    padding-bottom: 2rem;
  }

  ${ApplyBtnStyle} {
    height: 6%;
  }
`
