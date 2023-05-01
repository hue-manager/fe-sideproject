import React, { useCallback, useEffect, useState } from 'react'
import Sidebar from '@components/Sidebar'
import styled from 'styled-components'
import { SidebarContent } from '../router'
import { getAcceptHome, getToken, getUserRole } from '../utils/cookies'
import { useRouter } from '../hooks/useRouter'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { IUserInfo, getUser } from '../api/firebase'

interface GeneralLayoutProps {
  children: React.ReactNode
  isAdmin?: boolean
  withAuth?: boolean
}

const GeneralLayout = ({ children, isAdmin, withAuth }: GeneralLayoutProps) => {
  const userId = localStorage.getItem('userId')
  const [userProfile, setUserProfile] = useState<IUserInfo | null>(null)
  const { routeTo } = useRouter()

  const fetchUserProfile = useCallback(async () => {
    // 페이지 이동시 마다 로그인 여부를 확인하는 함수 구현
    // 로그인 여부 확인 ('/profile' 호출 성공여부 확인)
    // 로그인 성공시 userProfile 상태 업데이트
    // 로그인 실패시 로그인 페이지로 이동 ('/login')
    if (userId) {
      const userInfo = await getUser(userId)
      if (userInfo === null) {
        routeTo('/')
        return
      }
      setUserProfile(userInfo)
    } else {
      routeTo('/')
    }
  }, [])

  useEffect(() => {
    // 페이지 이동시 마다 로그인 여부를 확인하는 함수 실행
    console.log('page changed!')
    fetchUserProfile()
  }, [children])

  return (
    <GeneralLayoutStyle>
      {userId && userProfile !== null ? (
        <Sidebar sidebarContent={SidebarContent} userProfile={userProfile} />
      ) : null}
      <GeneralLayoutBodyStyle isShow={userId}>{children}</GeneralLayoutBodyStyle>
    </GeneralLayoutStyle>
  )
}

export default GeneralLayout

const GeneralLayoutStyle = styled.div`
  height: 100vh;
  display: flex;
`

const GeneralLayoutBodyStyle = styled.div<{ isShow: string | null }>`
  overflow-y: scroll;
  width: ${({ isShow }) => (isShow === null ? '100%' : 'calc(100% - 18rem)')};
  overflow-x: hidden;
  margin-left: ${({ isShow }) => (isShow === null ? 0 : '18rem')};
`
