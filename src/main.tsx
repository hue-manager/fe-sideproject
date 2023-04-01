import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ReactModal from 'react-modal'
ReactModal.setAppElement('#root')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <App />
  </>
)
