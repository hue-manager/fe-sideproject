import { Outlet, RouterProvider } from 'react-router-dom'
import { routers } from './router'
import { GlobalStyle } from './styles/GlobalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routers} />
      {/* <div className="big-screen-text">화면을 키워주세요!</div> */}
    </>
  )
}

export default App
