import { Necromancer } from './Archetypes';
import { PVP } from './Battle';
import Character from './Character';

const mage = new Character('putinha2');
const createdNecromancer = new Necromancer('puta1');

const necromancer = new Character(
  createdNecromancer.name, 
  createdNecromancer, 
);

necromancer.levelUp();
necromancer.levelUp();
necromancer.levelUp();
necromancer.levelUp();
necromancer.levelUp();
necromancer.levelUp();
necromancer.levelUp();
necromancer.levelUp();
necromancer.levelUp();

const winner = new PVP(necromancer, mage);

console.log(winner.fight());
