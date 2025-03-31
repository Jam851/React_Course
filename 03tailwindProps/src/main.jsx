import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PropsExample from './props.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PropsExample userName = "Kunal Nagrale"/>
  </StrictMode>,
)
