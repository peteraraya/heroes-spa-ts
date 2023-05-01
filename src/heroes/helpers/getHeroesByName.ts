import { heroes } from "../data"
import { HeroFilterFunction } from "../interfaces";


export const getHeroesByName : HeroFilterFunction = ( name = '')   => {

  // convierto el nombre a minusculas y le quito los espacios
  name = name.toLocaleLowerCase().trim();

  // si el nombre es vacio regreso un arreglo vacio
  if (name.length === 0) return [];
  
  // regreso un arreglo de heroes filtrados
  return heroes.filter(hero =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
 
}
