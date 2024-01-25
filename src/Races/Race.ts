abstract class Race {
  constructor(
    protected _name: string,
    protected _dexterity: number,
  ) {}

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number;

  public get name() {
    return this._name;
  }

  public get dexterity() {
    return this._dexterity;
  }
}

export default Race;