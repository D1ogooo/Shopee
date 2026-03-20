import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './routes/index.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ProductsProvider } from './hooks/useProducts.jsx';
import { GlobalStyle } from "./style/GlobalStyle.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductsProvider>
       <Router />
      </ProductsProvider>
    </AuthProvider>
    <GlobalStyle/>
  </StrictMode>,
)
