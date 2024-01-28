import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _strength: number;
  private _defense: number;
  private _lifePoints: number;
  private _energy: Energy;
  private _maxLifePoints: number;
  
  constructor(
    private _name: string,
    private _archetype: Archetype = new Mage(_name),
    private _dexterity: number = getRandomInt(1, 10),
    private _race: Race = new Elf(_name, _dexterity),
  ) { 
    this._archetype = _archetype;
    this._race = _race;
    this._strength = getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._defense = getRandomInt(1, 10);
    this._lifePoints = this._maxLifePoints;
  }

  get energy() {
    return { ...this._energy };
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get race() {
    return this._race;
  }

  get defense() {
    return this._defense;
  }

  get archetype() {
    return this._archetype;
  }

  setLifePoints(damage: number) {
    if (damage > 0) {
      this._lifePoints -= damage;
    }
  
    if (damage <= 0) {
      this._lifePoints = -1;
    }
  
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
  }

  levelUp(): void {
    const newValue = getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints + newValue > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints += newValue;
    }
    this._defense += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._lifePoints = this._maxLifePoints;
  }
    
  public attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);  
  }

  receiveDamage(attackPoints: number): number {
    const receivedDamage = attackPoints - this._defense;
    this.setLifePoints(receivedDamage);
    return this._lifePoints;
  }
}

export default Character;