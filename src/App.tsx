import { Outlet, RouterProvider } from 'react-router-dom'
import { routers } from './router'
import { GlobalStyle } from './styles/GlobalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routers} />
    </>
  )
}

export default App
