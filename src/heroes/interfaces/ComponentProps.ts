
export  interface HeroListProps {
    publisher: string;
  }

export  interface HeroCardProps {
    id: string;
    superhero: string;
    publisher: string;
    alter_ego: string;
    first_appearance: string;
    characters: string;
  }

export interface  charactesByHeroProps {
  alter_ego: string;
  characters: string;
}