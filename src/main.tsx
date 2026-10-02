import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

const restoredPath = sessionStorage.getItem('srccvde:redirect-path')
if (restoredPath) {
  sessionStorage.removeItem('srccvde:redirect-path')
  window.history.replaceState(null, '', restoredPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
