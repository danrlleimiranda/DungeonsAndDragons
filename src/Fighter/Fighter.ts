import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  attack(enemy: SimpleFighter | import('./Fighter').default): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}