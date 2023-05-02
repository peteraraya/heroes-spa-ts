import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../auth";
import { PrivateRoutesProps } from "../interfaces"
import { RUTAS } from '../config';

export const PrivateRoute = ({children}:PrivateRoutesProps) : JSX.Element => {

  // saber si el usuario está autenticado o no 
  const {logged} = useContext(AuthContext);

  const {pathname, search}  = useLocation();

  
  const lastPath = `${pathname}${search}`;

  localStorage.setItem('lastPath', lastPath);





  return (logged)
    ? <>{children}</>
    : <Navigate to={RUTAS.LOGIN} />

}
