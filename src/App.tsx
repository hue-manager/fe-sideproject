import { Outlet, RouterProvider } from 'react-router-dom'
import { routers } from './router'
import { GlobalStyle } from './styles/GlobalStyle'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routers} />
    </>
  )
}

export default App
