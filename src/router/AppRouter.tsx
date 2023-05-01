import { Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth"

import { RUTAS } from "../config"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"

export const AppRouter = () => {
  return (

   <>

      <Routes>

         <Route path={RUTAS.LOGIN}  element={<LoginPage />} />
         
         {/* Redirecciona cualquier otra ruta  */}
         <Route path={RUTAS.ALL}  element={<HeroesRoutes />} />

      </Routes>
   </>

  )
}
