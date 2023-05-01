import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { RUTAS } from "../../config";
import { getHeroById } from "../helpers";

export const HeroPage = () => {


  const { id } = useParams();

  const navigate = useNavigate();

  // Obtengo información del heroe
  // dispara una función cuando sus dependencias cambian
  const hero = useMemo(
    () =>  getHeroById( id || '' )
  ,[id]); 
  



  const onNavigateBack = () =>{
  
    navigate(-1);
  }


  if ( !hero ) {
    // en caso que no exista lo devuelvo a la ruta /marvel
    return <Navigate to={RUTAS.MARVEL} />
  }

  return (
   <div className="row mt-5">
    <div className="col-4">
      <img 
        src={`/assets/heroes/${id}.jpg`}
        alt={hero.superhero}
        className="img-thumbnail animate__animated animate__fadeInLeft"
      />
    </div>
    <div className="col-8" >
      <h3>{hero.superhero}</h3>
      <ul>
        <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
        <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
        <li className="list-group-item"><b>First appearance: </b>{hero.first_appearance}</li>
      </ul>

      <h5 className="mt-3">Characters</h5>
      <p>{hero.characters}</p>

      <button 
        className="btn btn-outline-primary"
        onClick={onNavigateBack}
      >
        Regresar
      </button>
    </div>
   </div>
  )
}
