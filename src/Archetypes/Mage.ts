import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static createdInstances = 0;
  constructor(
    protected _name: string,
    protected _special: number = 0, 
    protected _cost: number = 0, 
    protected _energyType: EnergyType = 'mana',
  ) {
    super(_name, _special, _cost);
    Mage.createdInstances += 1;
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
    return Mage.createdInstances;
  }
}

export default Mage;