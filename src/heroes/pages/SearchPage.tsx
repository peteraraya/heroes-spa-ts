import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCardProps, QueryProps } from "../interfaces";



export const SearchPage = () => {

const navigate = useNavigate();

const location = useLocation();

// siempre vamos a recibir un string, por eso lo casteamos
const {q = ''}:QueryProps = queryString.parse(location.search);

const heroes:HeroCardProps[] = getHeroesByName(q);

// retorna true si el string esta vacio
const showSeach = (q.length === 0);
// retorna true si el string no esta vacio y el array de heroes esta vacio
const showError = (q.length > 0) && heroes.length === 0;



const {formState, onInputChange } = useForm({
  searchText: q
})

// seteo el valor de searchText en una constante
const searchText = formState.searchText;

const onSearchSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // si el texto es menor a 1 caracter no hago nada
  // if (searchText.trim().length <= 1) return;

  navigate(`?q=${searchText}`)
}


  return (
    <>
      <h1>Search Page</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
            />

            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* {
            (q === '') 
            ?   <div className="alert alert-primary">Search a hero</div>
            :  (heroes.length === 0) 
                &&  <div className="alert alert-danger"> No hero a with <b>{q}</b></div>  
          } */}

            <div className="alert alert-primary animate__animated animate__fadeIn" 
                 style={{display: showSeach ? '' : 'none'}}>
              Search a hero
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{display: showError  ? '' : 'none'}}> 
              No hero a with <b>{q}</b>
            </div>  
  
          {
          
            heroes.map( hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }


        </div>
      </div>
    </>
  )
}
