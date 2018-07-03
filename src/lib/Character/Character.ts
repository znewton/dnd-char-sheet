export interface Race {}

export interface Class {}

export class Character {
  name: string;
  className: Class;
  race: Race;
  background: string;
  alignment: string;
  xp: number;
}
