import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Modal from '../Modal'
import { RootState } from '../../main'
import PostCalendar from '../DutyPostCalendar'
import Select from '../UI/Select'
import Button from '../UI/Button'

interface IDutyDateModal {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const DutyDateModal = ({ isOpen, setIsOpen }: IDutyDateModal) => {
  const { selectedDutyDate } = useSelector((state: RootState) => state.selectedDutyDate)
  const handleModal2Close = () => {
    setIsOpen(false)
  }
  const selectOptions = ['병원 방문', '각종 경조사', '개인 업무', '개인 사유']

  return (
    <Modal type="당직 신청" visible={isOpen} onClose={handleModal2Close}>
      <ChildrenStyle>
        <SelectBoxStyle>
          <span>신청 사유</span>
          <Select
            options={selectOptions}
            initial={'병원 방문'}
            width="100%"
            height="3rem"
            borderRadius=".5rem"
            fontSize="16px"
          />
        </SelectBoxStyle>
        <InputStyle>
          <span>신청 날짜</span>
          <input type="text" readOnly value={selectedDutyDate ? selectedDutyDate : ''} />
        </InputStyle>
        <PostCalendar />
        <ApplyBtnStyle>
          <Button
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
