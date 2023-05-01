import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

//  con el AuthProvider envolvemos a toda la aplicación para que tenga acceso a la información de autenticación