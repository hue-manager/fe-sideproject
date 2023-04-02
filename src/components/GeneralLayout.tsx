import React, { useEffect, useState } from 'react'
import Sidebar from '@components/Sidebar'
import styled from 'styled-components'
import { SidebarContent } from '../router'
import { getToken, getUserRole } from '../utils/cookies'
import { useRouter } from '../hooks/useRouter'
import { useLocation } from 'react-router-dom'

interface GeneralLayoutProps {
  children: React.ReactNode
  isAdmin?: boolean
  withAuth?: boolean
}

const GeneralLayout = ({ children, isAdmin, withAuth }: GeneralLayoutProps) => {
  const { routeTo } = useRouter()
  const { pathname } = useLocation()
  const [userRole, setuserRole] = useState<string>('')
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    const userRoleRes = getUserRole()
    setuserRole(userRoleRes)
    const tokenRes = getToken()
    setToken(tokenRes)
  }, [pathname])

  // userRole=user 일때 어드민 페이지에 접속할 경우
  if (isAdmin && userRole === 'user') {
    routeTo('/main')
  }

  // userRole=admin 일때 일반 유저 페이지에 접속할 경우
  if (!isAdmin && userRole === 'admin') {
    routeTo('/admin')
  }

  // userRole=admin 일때 일반 유저 페이지에 접속할 경우
  if (withAuth && token === undefined) {
    routeTo('/')
  }

  // userRole=admin 일때 일반 유저 페이지에 접속할 경우
  if (!withAuth && token === 'admin') {
    routeTo('/admin')
  }

  // userRole 없을땐 로그인 화면으로 이동
  // if (userRole === null) {
  //   routeTo('/')
  // }

  return (
    <GeneralLayoutStyle>
      <Sidebar sidebarContent={SidebarContent} />
      <GeneralLayoutBodyStyle>{children}</GeneralLayoutBodyStyle>
    </GeneralLayoutStyle>
  )
}

export default GeneralLayout

const GeneralLayoutStyle = styled.div`
  height: 100vh;
  display: flex;
`

const GeneralLayoutBodyStyle = styled.div`
  overflow-y: scroll;
  width: 100%;
  margin: 0 auto;
  padding-left: 18rem;
`
