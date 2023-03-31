import styled from 'styled-components'
import Inner from '@components/Inner'
// import { Button } from '@components/Button/Button'
import Button from '@components/UI/Button'
import ApplicationCard from './ApplicationCard'
import Pagination from '../UI/Pagination'

const ApplySection = () => {
  return (
    <ContainerStyle>
      <Inner height="100%" width="90%">
        <SectionStyle>
          <FirstBoxStyle>
            <h2>연차 • 당직 신청하기</h2>
            <div>
              <Button
                width="50%"
                height="4rem"
                borderRadius="1rem"
                bgColor="var(--color-white)"
                color="var(--color-primary)"
                padding="1rem 0"
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
              >
                당직신청
              </Button>
              {/* <Button primary={true} size={'large'} label={'연차신청'} /> */}
              {/* <Button primary={true} size={'large'} label={'당직신청'} /> */}
            </div>
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
  div {
    display: flex;
    gap: 2rem;
    button {
      font-size: 1.2rem;
      font-weight: 600;
    }
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
