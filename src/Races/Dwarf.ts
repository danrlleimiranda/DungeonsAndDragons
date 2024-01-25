import Race from './Race';

export default class Dwarf extends Race {
  static _createdInstances = 0;
  constructor(
    protected _name: string,
    protected _dexterity: number, 
    private _maxLivePoints: number = 80,
  ) {
    super(_name, _dexterity);
    Dwarf._createdInstances += 1;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get maxLifePoints(): number {
    return this._maxLivePoints;
  }

  public get name(): string {
    return this._name;
  }

  static override createdRacesInstances() {
    return this._createdInstances;
  }
}
