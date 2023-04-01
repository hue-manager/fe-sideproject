import styled from 'styled-components'
import Inner from '@components/Inner'
// import { Button } from '@components/Button/Button'
import Button from '@components/UI/Button'
import ApplicationCard from './ApplicationCard'
import Pagination from '../UI/Pagination'
import { MutableRefObject, useCallback, useState } from 'react'
import Modal from '../Modal'
import Select from '../UI/Select'
import PostCalendar from '../../components/PostCalendar'
interface ApplySectionProps {
  applyRef: MutableRefObject<HTMLDivElement | null>
}
const ApplySection = ({ applyRef }: ApplySectionProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)

  const handleModalOpen = () => {
    setIsOpen(true)
  }

  const handleModalClose = () => {
    setIsOpen(false)
  }

  const handleModal2Open = () => {
    setIsOpen2(true)
  }

  const handleModal2Close = () => {
    setIsOpen2(false)
  }

  const selectOptions = ['정규 스케쥴', '업무 지시', '비상 근무', '기타']

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
                onClick={handleModalOpen}
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
                onClick={handleModal2Open}
              >
                당직신청
              </Button>
              <Modal visible={isOpen} onClose={handleModalClose}>
                <FirstCalendarBoxStyle></FirstCalendarBoxStyle>
              </Modal>
              <Modal visible={isOpen2} onClose={handleModal2Close}>
                <ChildrenStyle>
                  <InputStyle>
                    <span>신청 날짜</span>
                    <Select
                      options={selectOptions}
                      initial={'정규 스케쥴'}
                      width="100%"
                      height="3rem"
                      borderRadius=".5rem"
                      fontSize="16px"
                    />
                  </InputStyle>
                  <PostCalendar />
                </ChildrenStyle>
              </Modal>

              {/* <Button primary={true} size={'large'} label={'연차신청'} /> */}
              {/* <Button primary={true} size={'large'} label={'당직신청'} /> */}
            </ButtonGroupStyle>
          </FirstBoxStyle>
          <SecondBoxStyle>
            <HeaderStyle>
              <h2>나의 신청 현황</h2>
              <Button
                width="7rem"
                height="2rem"
                borderRadius="9999px"
                bgColor="var(--color-primary)"
                color="var(--color-white)"
              >
                엑셀로 내보내기
              </Button>
            </HeaderStyle>
            <InfoStyle>
              <header>
                <div>전체</div>
                <div>신청자</div>
                <div>소속/직급</div>
                <div>신청 사유</div>
                <div>신청 날짜</div>
                <div>상태</div>
              </header>
              <ul>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <ApplicationCard key={index} />
                ))}
              </ul>
            </InfoStyle>
            <Pagination />
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
    div {
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
  ul {
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

// modal

const ChildrenStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div:last-child {
    align-self: center;
  }
`

const InputStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  span {
    font-size: 1rem;
    font-weight: 600;
    width: 15%;
  }
  & > div {
    width: 85%;
  }
`

const FirstCalendarBoxStyle = styled.div``
