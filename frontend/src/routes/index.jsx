import { Routes, Route } from 'react-router-dom';
import Pagina_404 from '../pages/Pagina_404';

export function HomeRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path="*" element={<Pagina_404 />} />
    </Routes>
  );
}