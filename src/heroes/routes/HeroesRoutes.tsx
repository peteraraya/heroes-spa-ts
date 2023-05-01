import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { RUTAS } from "../../config"
import { DcPage, HeroPage, MarvelPage, SearchPage } from ".."


export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path={RUTAS.MARVEL}  element={<MarvelPage />} />
          <Route path={RUTAS.DC}      element={<DcPage     />} />
          <Route path={RUTAS.SEARCH}  element={<SearchPage />} />
          <Route path={`${RUTAS.HERO}/:id`}    element={<HeroPage   />} />

          {/* Redireccionar */}
          <Route path={RUTAS.ALL}    element={<Navigate to={RUTAS.MARVEL} />} />
        </Routes>
      </div>
    </>
  )
}
