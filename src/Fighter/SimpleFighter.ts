export default interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack(enemy: SimpleFighter | import('./Fighter').default): void;
  receiveDamage(attackPoints: number): number 
}