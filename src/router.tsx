import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import PATH from './constants/pathConst'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Main from './pages/Main'
import MyPage from './pages/MyPage'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'
import User from './pages/User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: PATH.MAIN, element: <Home /> },
      { path: PATH.SIGNUP, element: <SignUp /> },
      { path: PATH.HOME, element: <Main /> },
      { path: PATH.MYPAGE, element: <MyPage /> },
      { path: PATH.ADMIN, element: <Admin /> },
      { path: PATH.USER, element: <User /> },
    ],
  },
])

export default router
