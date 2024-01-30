import Fighter, { SimpleFighter } from './Fighter';
import Monster from './Monster';

export default class Dragon extends Monster {
  constructor(protected _lifePoints: number = 999, protected _strength: number) {
    super(_lifePoints, _strength);
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }
}
