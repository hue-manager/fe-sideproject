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

interface IAnnualLeaveModal {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const AnnualLeaveModal = ({ isOpen, setIsOpen }: IAnnualLeaveModal) => {
  // const accessToken = getToken()

  const [currentValue, setCurrentValue] = useState('정규 스케쥴')
  const { startDate, endDate } = useSelector((state: RootState) => state.selectedAnnualDate)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!currentValue) {
      alert('신청사유를 입력해주세요.')
    } else if (!startDate || !endDate) {
      alert('신청 날짜를 선택해주세요.')
    } else {
      // const start = new Date(startDate)
      // const end = new Date(endDate)

      // const timeDiff = Math.abs(end.getTime() - start.getTime())
      // const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))

      // if (diffDays > 15) {
      //   alert('날짜 차이가 15일 이내가 아닙니다.')
      //   return
      // }

      // const response = await ax.postApply(accessToken, {
      //   category: 'VACATION',
      //   memo: currentValue,
      //   startDate: startDate,
      //   endDate: endDate,
      // })
      const response = {status : 200 , data: {
        message: '연차 신청에 성공했습니다.'
      }}

      if (response.status === 200) {
        if (response.data.message) alert(response.data.message)
        else {
          alert('연차 신청이 완료되었습니다. ')
          setIsOpen(false)
        }
      } else {
        alert('연차신청에 실패하셨습니다')
      }
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
