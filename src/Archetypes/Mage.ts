import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private static createdInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage.createdInstances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;