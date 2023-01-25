import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy: Energy;
}

export default Fighter;