import { BrowserRouter } from 'react-router-dom';
import { UserRoutes } from './user.routes';
import { AuthRoutes } from './auth.routes';

export function Router() {
  const user = true
  return (
    <BrowserRouter>
     { user ? <UserRoutes/> : <AuthRoutes/> }
    </BrowserRouter>
  )
}