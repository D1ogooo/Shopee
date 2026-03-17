import { Routes, Route } from 'react-router-dom';
import Pagina_404 from '../pages/Pagina_404';
import { Signin } from '../pages/Auth/Signin';
import { Signup } from '../pages/Auth/Signup';

export function AuthRoutes() {
  return (
     <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/register' element={<Signup />} />
      <Route path="*" element={<Pagina_404 />} />
    </Routes>
  );
}