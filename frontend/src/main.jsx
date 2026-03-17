import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './routes/index.jsx'
import { GlobalStyle } from "./style/GlobalStyle.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
    <GlobalStyle/>
  </StrictMode>,
)
