import React, { useEffect, useState } from 'react'
import Sidebar from '@components/Sidebar'
import styled from 'styled-components'
import { SidebarContent } from '../router'
import { getAcceptHome, getToken, getUserRole } from '../utils/cookies'
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
  const [acceptHome, setAcceptHome] = useState<boolean>(false)
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    console.log('pathname', pathname)
    const userRoleRes = getUserRole()
    setuserRole(userRoleRes)
    const tokenRes = getToken()
    setToken(tokenRes)
    if (pathname === '/') {
      setShowSidebar(false)
    } else {
      setShowSidebar(true)
    }
    // const acceptHomeRes = getAcceptHome()
    // setAcceptHome(acceptHomeRes)
  }, [pathname])

  console.log('acceptHome', acceptHome)

  // userRole=user 일때 어드민 페이지에 접속할 경우
  // if (isAdmin && userRole === 'user') {
  //   routeTo('/main')
  // }

  // userRole=admin 일때 일반 유저 페이지에 접속할 경우
  // if (!isAdmin && userRole === 'admin') {
  //   routeTo('/admin')
  // }

  // userRole=admin 일때 일반 유저 페이지에 접속할 경우
  // if (withAuth && token === undefined) {
  //   routeTo('/')
  // }

  // userRole=admin 일때 일반 유저 페이지에 접속할 경우
  // if (!withAuth && token === 'admin') {
  //   routeTo('/admin')
  // }

  // token 없을땐 로그인 화면으로 이동
  // if (token === '') {
  //   routeTo('/')
  // }

  // token 이 있는데 홈으로 접속할 경우
  // if (token && window.location.pathname === '/') {
  //   routeTo('/main')
  // }
  return (
    <GeneralLayoutStyle>
      {/* {false ? <Sidebar sidebarContent={SidebarContent} /> : null} */}
      {/* {pathname === '/' || pathname === '/signup' ? null : (
        <Sidebar sidebarContent={SidebarContent} />
      )}
      <GeneralLayoutBodyStyle acceptHome={acceptHome}>{children}</GeneralLayoutBodyStyle> */}
      {showSidebar && <Sidebar sidebarContent={SidebarContent} />}
      <GeneralLayoutBodyStyle acceptHome={acceptHome} showSidebar={showSidebar}>
        {children}
      </GeneralLayoutBodyStyle>
    </GeneralLayoutStyle>
  )
}

export default GeneralLayout

const GeneralLayoutStyle = styled.div`
  height: 100vh;
  display: flex;
`

const GeneralLayoutBodyStyle = styled.div<{ acceptHome: boolean; showSidebar: boolean }>`
  overflow-y: scroll;
  width: 100%;
  margin: 0 auto;
  margin-left: ${({ showSidebar }) => (showSidebar ? '18rem' : null)};
  overflow-x: hidden;
  /* margin-left: 18rem; */
`
