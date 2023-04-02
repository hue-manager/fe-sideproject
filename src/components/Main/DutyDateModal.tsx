import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Modal from '../Modal'
import { RootState } from '../../main'
import PostCalendar from '../DutyPostCalendar'
import Select from '../UI/Select'
import Button from '../UI/Button'
import { ax } from '../../api/axiosClient' //'@src/api/axiosClient'

type FormData = {
  dutyDate: string
}
interface IDutyDateModal {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const DutyDateModal = ({ isOpen, setIsOpen }: IDutyDateModal) => {
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3QxMDBAbmF2ZXIuY29tIiwiaWF0IjoxNjgwNDM1NjAzLCJleHAiOjE2ODA0NDI4MDN9.phiGaV7UH2WCu9ddZpYOGBByvCAG4rv2GPHf3Hjc9ag'
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
      const response = await ax.postApply(accessToken, {
        category: 'WORK',
        memo: currentValue,
        startDate: selectedDutyDate,
        endDate: selectedDutyDate,
      })

      if (response.status === 200) {
        alert('당직신청이 완료되었습니다.')
        setIsOpen(false)
      } else {
        alert('당직신청에 실패하셨습니다')
      }
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
