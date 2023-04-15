import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import ReactModal from 'react-modal'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
ReactModal.setAppElement('#root')
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()
import store from './store/store'
import { RecoilRoot } from 'recoil'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <Provider store={store}>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
        {/* <ToastContainer /> */}
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </RecoilRoot>
  </QueryClientProvider>
)

export type RootState = ReturnType<typeof store.getState>
