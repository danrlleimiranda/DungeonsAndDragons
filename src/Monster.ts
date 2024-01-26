import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(private _lifePoints: number = 85, private _strength: number = 63) {
    
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