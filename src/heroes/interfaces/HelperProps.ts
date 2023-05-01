import { HeroCardProps } from ".";

export interface HeroFilterFunction {  
  (name: string): HeroCardProps [];
}