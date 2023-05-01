import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../auth";
import { PrivateRoutesProps } from "../interfaces"
import { RUTAS } from '../config';

export const PublicRoute = ({children}:PrivateRoutesProps) : JSX.Element => {

  // saber si el usuario está autenticado o no 
  const {logged} = useContext(AuthContext);

  return (!logged)
    ? <>{children}</>
    : <Navigate to={RUTAS.MARVEL} />

}
