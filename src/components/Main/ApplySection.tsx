import styled from 'styled-components'
import Inner from '@components/Inner'
import Button from '@components/UI/Button'
import ApplicationCard from './ApplicationCard'
import Pagination from '../UI/Pagination'
import { MutableRefObject, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import DutyDateModal from './DutyDateModal'
import { setSelectedDutyDate } from '../../store/slice/selectedDutyDateSlice'
import { setEndDate, setStartDate } from '../../store/slice/selectedAnnualDateSlice'
import AnnualLeaveModal from './AnnualLeaveModal'
import Select from '../UI/Select'
import { CSVLink } from 'react-csv'

interface ApplySectionProps {
  userInfo: any
  applyRef: MutableRefObject<HTMLDivElement | null>
  setUserInfo: any
}
const ApplySection = ({ setUserInfo, userInfo, applyRef }: ApplySectionProps) => {
  const [isAnnualLeaveOpen, setIsAnnualLeaveOpen] = useState(false)
  const [isDutyModalOpen, setIsDutyModalOpen] = useState(false)
  const [currentValue, setCurrentValue] = useState('전체')

  const dispatch = useDispatch()

  const handleAnnualLeaveOpen = () => {
    dispatch(setStartDate(null))
    dispatch(setEndDate(null))
    setIsAnnualLeaveOpen(true)
  }

  const handleDutyModalOpen = () => {
    dispatch(setSelectedDutyDate(null))
    setIsDutyModalOpen(true)
  }

  const selectOptions = ['전체', '연차', '당직']

  const data = [
    ['전체', '신청자', '소속/직급', '신청사유', '시작날짜', '종료날짜', '상태'],
    ['연차', '공혜지', '인사팀/사원', '병원방문', '2023-01-25', '2023-01-31', '처리대기'],
    ['연차', '공혜지', '인사팀/사원', '병원방문', '2023-01-25', '2023-01-31', '처리대기'],
    ['연차', '공혜지', '인사팀/사원', '병원방문', '2023-01-25', '2023-01-31', '처리대기'],
    ['연차', '공혜지', '인사팀/사원', '병원방문', '2023-01-25', '2023-01-31', '처리대기'],
    ['연차', '공혜지', '인사팀/사원', '병원방문', '2023-01-25', '2023-01-31', '처리대기'],
  ]

  return (
    <ContainerStyle ref={applyRef}>
      <Inner height="100%" width="90%">
        <SectionStyle>
          <FirstBoxStyle>
            <h2>연차 • 당직 신청하기</h2>
            <ButtonGroupStyle>
              <Button
                width="50%"
                height="4rem"
                borderRadius="1rem"
                bgColor="var(--color-white)"
                color="var(--color-primary)"
                padding="1rem 0"
                onClick={handleAnnualLeaveOpen}
              >
                연차신청
              </Button>
              <Button
                width="50%"
                height="4rem"
                borderRadius="1rem"
                bgColor="var(--color-white)"
                color="var(--color-primary)"
                padding="1rem 0"
                onClick={handleDutyModalOpen}
              >
                당직신청
              </Button>

              <AnnualLeaveModal
                isOpen={isAnnualLeaveOpen}
                setIsOpen={setIsAnnualLeaveOpen}
                setUserInfo={setUserInfo}
              />
              <DutyDateModal isOpen={isDutyModalOpen} setIsOpen={setIsDutyModalOpen} />
            </ButtonGroupStyle>
          </FirstBoxStyle>
          <SecondBoxStyle>
            <HeaderStyle>
              <h2>나의 신청 현황</h2>
              {/* <Button
                width="7rem"
                height="2rem"
                borderRadius="9999px"
                bgColor="var(--color-primary)"
                color="var(--color-white)"
              >
                엑셀로 내보내기
              </Button> */}
              <CSVButton data={data} filename={'my-application.csv'}>
                엑셀로 내보내기
              </CSVButton>
            </HeaderStyle>
            <InfoStyle>
              <header>
                <div>
                  <Select
                    options={selectOptions}
                    currentValue={currentValue}
                    setCurrentValue={setCurrentValue}
                    width="60%"
                    height="3rem"
                    borderRadius=".5rem"
                    fontSize="14px"
                    arrowImg="/images/selectBtn3.png"
                    borderColor="inherit"
                    bgColor="var(--color-primary)"
                    color="var(--color-white)"
                    type="bgPrimary"
                  />
                </div>
                <div>신청자</div>
                <div>소속/직급</div>
                <div>신청 사유</div>
                <div>시작 날짜</div>
                <div>종료 날짜</div>
                <div>상태</div>
              </header>
              <ul>
                {[1, 2, 3, 4, 5].map((item: any, index: number) => (
                  <ApplicationCard key={index} />
                ))}
              </ul>
            </InfoStyle>
            {/* <Pagination activePage={number} pages={totalPages} setActivePage={fetchNextPage} /> */}
          </SecondBoxStyle>
        </SectionStyle>
      </Inner>
    </ContainerStyle>
  )
}

export default ApplySection

const ContainerStyle = styled.section`
  height: 100vh;
`

// 첫번째 영역
const FirstBoxStyle = styled.div`
  h2 {
    padding-bottom: 2rem;
  }
`

const CSVButton = styled(CSVLink)`
  cursor: pointer;
  width: 7rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
`
const ButtonGroupStyle = styled.div`
  display: flex;
  gap: 2rem;
  button {
    font-size: 1.2rem;
    font-weight: 600;
  }
`

// 두번째 영역
const SecondBoxStyle = styled.div`
  text-align: center;
`

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  button {
    font-size: 12px;
  }
`

const InfoStyle = styled.div`
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    border-radius: 9999px;
    padding: 0 3rem;
    background-color: var(--color-primary);
    & > div:first-child {
      width: 14.2%;
      height: 100%;
      gap: 1.5rem;
      font-weight: 600;
      padding: 0;
      display: flex;
      justify-content: center;
      div:first-child {
        /* width: 50%; */
      }
    }
    div:not(:first-child) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 16.6%;
      height: 100%;
      gap: 1.5rem;
      color: var(--color-white);
      font-weight: 600;
    }
  }
  & > ul {
    padding-top: 1.75rem;
    padding-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  gap: 0.25rem;
  width: 100%;
  height: 100%;
  div {
    h2 {
      font-size: 1.75rem;
      font-weight: 600;
      color: var(--color-black70);
    }
  }
  ${FirstBoxStyle} {
    height: 28%;
  }
  ${SecondBoxStyle} {
    height: 72%;
  }
`
