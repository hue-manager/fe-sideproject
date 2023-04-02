import { createBrowserRouter } from 'react-router-dom'
import { Router as RemixRouter } from '@remix-run/router/dist/router'
import App from './App'
import PATH from './constants/pathConst'
import Admin from './pages/Admin'
import Home from '@pages/Home'
import Main from './pages/Main'
import MyPage from './pages/MyPage'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'
import User from './pages/User'
import GeneralLayout from './components/GeneralLayout'
import { SidebarElement } from './env'

interface RouterElement {
  id: number // 페이지 아이디 (반복문용 고유값)
  path: string // 페이지 경로
  label: string // 사이드바에 표시할 페이지 이름
  element: React.ReactNode // 페이지 엘리먼트
  withAuth?: boolean // 인증이 필요한 페이지 여부
  isAdmin?: boolean
}

const routerData: RouterElement[] = [
  {
    id: 0,
    path: PATH.HOME,
    label: 'Home',
    element: <Home />,
    withAuth: false,
    isAdmin: false,
  },
  {
    id: 1,
    path: PATH.SIGNUP,
    label: 'SignUp',
    element: <SignUp />,
    withAuth: false,
    isAdmin: false,
  },
  {
    id: 2,
    path: PATH.MAIN,
    label: '메인페이지',
    element: <Main />,
    withAuth: true,
    isAdmin: false,
  },
  {
    id: 3,
    path: PATH.MYPAGE,
    label: '마이페이지',
    element: <MyPage />,
    withAuth: true,
    isAdmin: false,
  },
  {
    id: 4,
    path: PATH.ADMIN,
    label: '메인페이지',
    element: <Admin />,
    withAuth: false,
    isAdmin: true,
  },
  {
    id: 5,
    path: PATH.USER,
    label: '계정관리페이지',
    element: <User />,
    withAuth: false,
    isAdmin: true,
  },
]

// 인증이 필요한 페이지는 GeneralLayout으로 감싸서 라우터에 전달
// GeneralLayou에는 페이지 컴포넌트를 children으로 전달
// RemixRouter란? router 안에 들어가는 형태
export const routers: RemixRouter = createBrowserRouter(
  routerData.map((router) => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: (
          <GeneralLayout
            isAdmin={'isAdmin' in router && router.isAdmin}
            withAuth={'withAuth' in router && router.withAuth}
            key={router.id}
          >
            {router.element}
          </GeneralLayout>
        ),
        errorElement: <NotFound />,
      }
    } else if (router.isAdmin) {
      return {
        path: router.path,
        element: (
          <GeneralLayout
            isAdmin={'isAdmin' in router && router.isAdmin}
            withAuth={'withAuth' in router && router.withAuth}
            key={router.id}
          >
            {router.element}
          </GeneralLayout>
        ),
        errorElement: <NotFound />,
      }
    } else {
      return {
        path: router.path,
        element: <GeneralLayout>{router.element}</GeneralLayout>,
        errorElement: <NotFound />,
      }
    }
  })
)

// 라우터 객체에서 인증이 필요한 페이지만 필터링해 사이드바에 전달
// id, path, label을 전달하여 Sidebar에서 사용
export const SidebarContent: SidebarElement[] = routerData.reduce(
  (prev: SidebarElement[], router: RouterElement) => {
    if (router.withAuth) {
      return [
        ...prev,
        {
          id: router.id,
          path: router.path,
          label: router.label,
        },
      ]
    } else if (router.isAdmin) {
      return [
        ...prev,
        {
          id: router.id,
          path: router.path,
          label: router.label,
          isAdmin: router.isAdmin,
        },
      ]
    } else return prev
  },
  [] as SidebarElement[]
)
