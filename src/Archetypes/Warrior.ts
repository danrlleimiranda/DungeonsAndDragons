import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static createdInstances = 0;
  constructor(
    protected _name: string,
    protected _special: number = 0, 
    protected _cost: number = 0, 
    protected _energyType: EnergyType = 'stamina',
  ) {
    super(_name, _special, _cost);
    Warrior.createdInstances += 1;
  }

  get cost(): number {
    return this._cost;
  }

  get special(): number {
    return this._special;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  get name(): string {
    return this._name;
  }

  static override createdArchetypeInstances() {
    return Warrior.createdInstances;
  }
}

export default Warrior;