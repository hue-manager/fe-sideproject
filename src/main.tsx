import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './store/slice/total'
import ReactModal from 'react-modal'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
ReactModal.setAppElement('#root')
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)

export type RootState = ReturnType<typeof store.getState>
