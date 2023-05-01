import { heroes } from "../data"

export const getHeroById = (id:string)  => {
 
  // si existe lo regresa si no existe regresa un undefined
  return heroes.find(hero => hero.id === id);

}
