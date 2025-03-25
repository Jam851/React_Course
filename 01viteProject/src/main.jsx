import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import New from './New.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <New />
  </StrictMode>,
)
