import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static createdInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger.createdInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;