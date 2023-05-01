import { HeroCard } from ".";
import { getHeroesByPublisher } from "../helpers";
import { HeroListProps } from "../interfaces";
import { useMemo } from 'react';



export const HeroList = ({publisher}:HeroListProps) => {

  // Memorizando el resultado de la función getHeroesByPublisher
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  
  return (
   <div className="row rows-cols-1 row-cols-md-3 g-4">
    {heroes.map(hero => (
      <HeroCard 
        key={hero.id}  
        {...hero}
        />
    ))}
   </div>
  )
}
