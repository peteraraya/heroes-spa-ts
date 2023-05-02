import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "..";

export const LoginPage = () => {

  // utilizamos useContext para obtener la información de autenticación

  const { login } = useContext(AuthContext);
  

  // Utilizamos el hook useNavigate para navegar a la ruta /marvel
  const navigate = useNavigate();

  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Peter Araya');
    
    navigate(lastPath, { replace: true });

  }

  return (
    <div className="container mt-5">
      <h1>Login Page</h1>
      <hr />

      <button 
      className="btn btn-primary "
      onClick={handleLogin}
      >
        Login
        </button>

    </div>
  )
}
