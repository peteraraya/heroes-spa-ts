

import { heroes } from '../data';

export const getHeroesByPublisher = ( publisher: string ) => {
  
      const validPublishers = ['DC Comics', 'Marvel Comics'];
  
      if ( !validPublishers.includes( publisher ) ) {
          throw new Error(`Publisher "${ publisher }" no es correcto`);
      }
  
      return heroes.filter( hero => hero.publisher === publisher );
  
  }
