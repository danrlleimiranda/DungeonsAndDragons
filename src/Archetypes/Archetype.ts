import { EnergyType } from '../Energy';

abstract class Archetype {
  constructor(
    protected _name: string, 
    protected _special: number = 0, 
    protected _cost: number = 0,
  ) { 
  }

  get name(): string {
    return this._name;
  }
  
  get special() : number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType; 
}

export default Archetype;