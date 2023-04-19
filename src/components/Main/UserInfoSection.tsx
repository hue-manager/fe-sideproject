import React, { MutableRefObject, useState } from 'react'
import styled from 'styled-components'
import Inner from '@components/Inner'
import { getToken, getUserId } from '../../utils/cookies'
interface UserInfoSectionProps {
  userInfo: any
  applySectionRef: MutableRefObject<HTMLDivElement | null>
  calendarSectionRef: MutableRefObject<HTMLDivElement | null>
}

const UserInfoSection = ({
  userInfo,
  applySectionRef,
  calendarSectionRef,
}: UserInfoSectionProps) => {
  const { email, userName, phoneNumber, role, department, position, vacationCount } = userInfo
  const { onDuty, application, approved, pending, rejection } = userInfo.overview

  const handleApplyClick = () => {
    applySectionRef.current?.scrollIntoView({ behavior: 'smooth' })
    console.log(applySectionRef.current)
  }

  const handleCalendarClick = () => {
    calendarSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
    console.log(calendarSectionRef.current)
  }

  return (
    <ContainerStyle>
      <Inner height="100%" width="90%">
        <SectionStyle>
          <FirstBoxStyle>
            <TitleStyle>
              <span>{userName}</span>
              <span>님 안녕하세요.</span>
            </TitleStyle>
            <ContentStyle>
              <div>
                <span>{userName}</span>
                <span>님의 잔여 연차는</span>
                <span>{vacationCount}</span>
                <span>개입니다.</span>
              </div>
              <div>
                <span>이번 달 당직은</span>
                <span>{onDuty}</span>
                <span>번 하셨네요.</span>
              </div>
            </ContentStyle>
          </FirstBoxStyle>
          <SecondBoxStyle>
            <div>
              <span>잔여 연차</span>
              <span>{vacationCount}일</span>
            </div>
            <div>
              <span>당직</span>
              <span>{onDuty}일</span>
            </div>
          </SecondBoxStyle>
          <ThirdBoxStyle>
            <div>
              <span>신청</span>
              <span>{application}건</span>
            </div>
            <div>
              <span>승인 완료</span>
              <span>{approved}건</span>
            </div>
            <div>
              <span>승인 대기</span>
              <span>{pending}건</span>
            </div>
            <div>
              <span>승인 거절</span>
              <span>{rejection}건</span>
            </div>
          </ThirdBoxStyle>
          <FourthBoxStyle>
            <div onClick={handleApplyClick}>
              <p>나의 신청 내역 보러가기</p>
            </div>
            <div onClick={handleCalendarClick}>
              <p>캘린더 보러가기</p>
            </div>
          </FourthBoxStyle>
        </SectionStyle>
      </Inner>
    </ContainerStyle>
  )
}

export default UserInfoSection

const ContainerStyle = styled.section`
  height: 100vh;
`

// 첫번째 영역
const FirstBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 3rem;
  gap: 2rem;
  /* height: 280px; */
  height: 100%;
  border-radius: 1rem;
  margin-bottom: 24px;
  font-size: 1.5rem;
  line-height: 1.2;
  background-color: var(--color-white);
  background-image: url('Vector.png');
  background-repeat: no-repeat;
  background-position: 95% 50%;
`

const TitleStyle = styled.div`
  display: flex;
  align-items: center;
  span:first-child {
    font-weight: 600;
  }
`

const ContentStyle = styled.div`
  div:first-child {
    display: flex;
    align-items: center;

    span {
      :nth-child(1) {
        font-weight: 600;
      }
      :nth-child(3) {
        margin-left: 0.4rem;
        font-weight: 600;
      }
    }
  }
  div:last-child {
    display: flex;
    align-items: center;

    span {
      :nth-child(2) {
        margin-left: 0.4rem;
        font-weight: 600;
      }
    }
  }
`

// 두번째 영역
const SecondBoxStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 24px;
  gap: 1rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    width: 50%;
    background-color: var(--color-white);
    border-radius: 1rem;
    span:first-child {
      font-size: 1.25rem;
      line-height: 1.2;
    }
    span:nth-child(2) {
      font-size: 2rem;
      line-height: 1.2;
      color: var(--color-primary);
      font-weight: 700;
    }
  }
`

// 세번째 영역
const ThirdBoxStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: var(--color-white);
  margin-bottom: 24px;
  padding: 0 3rem;
  div {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    span {
      :first-child {
        font-size: 1.25rem;
        line-height: 1.2;
      }
      :last-child {
        font-size: 2rem;
        line-height: 1.2;
        color: var(--color-primary);
        font-weight: 700;
      }
    }
  }
`

// 네번째 영역
const FourthBoxStyle = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  div {
    border-radius: 1rem;
    padding: 3rem;
    font-size: 1.25rem;
    line-height: 1.2;
    font-weight: 600;
    :first-child {
      width: 52%;
      background-color: var(--color-white);
      background-image: url('images/Add_apps_perspective_matte_s.png');
      background-repeat: no-repeat;
      background-position: 95% 50%;
    }
    :last-child {
      width: 48%;
      background-color: var(--color-white);
      background-image: url('images/Calendar_perspective_matte_s 1.png');
      background-repeat: no-repeat;
      background-position: 95% 50%;
    }
  }
`

const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  gap: 0.25rem;
  width: 100%;
  height: 100%;
  ${FirstBoxStyle} {
    height: 35%;
  }
  ${SecondBoxStyle} {
    height: 15%;
  }
  ${ThirdBoxStyle} {
    height: 10%;
  }
  ${FourthBoxStyle} {
    height: 35%;
  }
`
