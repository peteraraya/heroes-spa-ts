import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { RUTAS } from "../config"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (

   <>

      <Routes>


         <Route path={RUTAS.LOGINPRIVATE} 
                element={
                  <PublicRoute>
                    <Routes>
                        <Route path={RUTAS.ALL} element={<LoginPage />} />
                    </Routes>
                  </PublicRoute>
                } 
         />

         <Route path={RUTAS.ALL} 
                element={
               <PrivateRoute>
                  <HeroesRoutes />
               </PrivateRoute>
               } 
         />
      
         
         {/* Redirecciona cualquier otra ruta  
         <Route path={RUTAS.ALL}  element={<HeroesRoutes />} />*/}

      </Routes>
   </>

  )
}
