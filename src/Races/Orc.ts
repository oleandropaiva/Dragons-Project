import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static _createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createdInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;