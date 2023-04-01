import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './store/slice/total'
import ReactModal from 'react-modal'
ReactModal.setAppElement('#root')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
)

export type RootState = ReturnType<typeof store.getState>
