import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HomeRouter } from './routes/index.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeRouter />
  </StrictMode>,
)
