import React from 'react'
import Sidebar from '@components/Sidebar'
import styled from 'styled-components'
import { SidebarContent } from '../router'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
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
