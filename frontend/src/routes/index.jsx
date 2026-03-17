import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { UserRoutes } from './user.routes';
import { AuthRoutes } from './auth.routes';

export function Router() {
  const { data } = useContext(AuthContext);

  return (
    <BrowserRouter>
     { data.user ? <UserRoutes/> : <AuthRoutes/> }
    </BrowserRouter>
  )
}