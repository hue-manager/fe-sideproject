import { Outlet, RouterProvider } from 'react-router-dom'
import { routers } from './router'
import { GlobalStyle } from './styles/GlobalStyle'
import GeneralLayout from '@components/GeneralLayout'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GeneralLayout>
        <Outlet />
      </GeneralLayout>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
