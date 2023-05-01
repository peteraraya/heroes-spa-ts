// el AuthProvider es un componente que se encarga de proveer la información de autenticación a toda la aplicación
// utiliza el authContext para proveer la información de autenticación
import { useReducer }  from 'react';
import { AuthContext } from "./AuthContext"
import { AuthAction, AuthState, ProviderProps } from "../interfaces"
import { authReducer } from './authReducer';
import { types } from '../types/types';


const initialState : AuthState = {
  logged: false,
}

export const AuthProvider = ({children} : ProviderProps) => {

  
  const [authState, dispatch] = useReducer(authReducer, initialState);


  // creamos una función que se encargue de cambiar el estado de logged
  const onLogin = (name='') => {

    const action:AuthAction = {
      type: types.login,
      payload: {
        id:'ABC',
        name:name
      }
    }
    
    dispatch(action)
  }

  

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: onLogin
    }}>
      {children}
    </AuthContext.Provider>
  )
}
