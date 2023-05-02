import { Link } from "react-router-dom";
import { HeroCardProps, charactesByHeroProps } from "../interfaces"
import { RUTAS } from '../../config/Rutas';


const CharactesByHero = ({alter_ego, characters}:charactesByHeroProps) =>{

  return (alter_ego === characters)
    ? (<></>)
    : <p className="card-text">{characters}</p>;
}



export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}:HeroCardProps) => {

  const heroImageUrl = `./assets/heroes/${id}.jpg`;

  // const charactesByHero = <p className="card-text">{characters}</p>;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row g-0">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                {/* { 
                  (alter_ego !== characters) && charactesByHero
                } */}

               <CharactesByHero characters={characters} alter_ego={alter_ego} /> 

              <p className="card-text">

                <small className="text-muted">{first_appearance}</small>
              </p>


              <Link to={`${RUTAS.HERO}/${id}`}>
                Más...
              </Link>
              </div>
        </div>
      </div>
    </div>
  </div>
  )
}
