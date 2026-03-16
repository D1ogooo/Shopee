import { Home } from '../pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Products } from '../pages/Products';
import Pagina_404 from '../pages/Pagina_404';

export function HomeRouter() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<Products />} />
      <Route path="*" element={<Pagina_404 />} />
    </Routes>
    </BrowserRouter>
  );
}