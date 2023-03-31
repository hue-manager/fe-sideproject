import { createBrowserRouter } from 'react-router-dom'
import { Router as RemixRouter } from '@remix-run/router/dist/router'
import App from './App'
import PATH from './constants/pathConst'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Main from './pages/Main'
import MyPage from './pages/MyPage'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'
import User from './pages/User'

interface RouterElement {
  path: string
  label: string
  element: React.ReactNode
  withAuth?: boolean
}

const routerData: RouterElement[] = [
  {
    path: PATH.MAIN,
    label: 'Main(Login)',
    element: <Main />,
    withAuth: false,
  },
  {
    path: PATH.SIGNUP,
    label: 'SignUp',
    element: <SignUp />,
    withAuth: false,
  },
  {
    path: PATH.HOME,
    label: 'Home',
    element: <Home />,
    withAuth: true,
  },
  {
    path: PATH.MYPAGE,
    label: 'MyPage',
    element: <MyPage />,
    withAuth: true,
  },
  {
    path: PATH.ADMIN,
    label: 'Admin',
    element: <Admin />,
    withAuth: true,
  },
  {
    path: PATH.USER,
    label: 'User',
    element: <User />,
    withAuth: true,
  },
]

export const routers: RemixRouter = createBrowserRouter(
  routerData.map((router) => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: router.element,
      }
    } else {
      return {
        path: router.path,
        element: <>{router.element}</>,
      }
    }
  })
)
