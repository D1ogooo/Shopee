import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './routes/index.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ProductsProvider } from './hooks/useProducts.jsx';
import { GlobalStyle } from "./style/GlobalStyle.js";
import { CartProvider } from './hooks/useCart.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductsProvider>
       <CartProvider>
        <Router />
       </CartProvider>
      </ProductsProvider>
    </AuthProvider>
    <GlobalStyle/>
  </StrictMode>,
)
