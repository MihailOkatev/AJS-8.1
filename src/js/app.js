// TODO: write your code here
import { Zombie } from './Zombie';
import { Undead } from './Undead';
import { Magician } from './Magician';
import { Swordsman } from './Swordsman';
import { Team } from './Team';

const tank = new Zombie('Nemezida');
const secondTank = new Swordsman('Richard Lion Heart');
const defender = new Undead('Baba Yaga');
const caster = new Magician('Merlin');

const dreamTeam = new Team();

dreamTeam.addAll(tank, secondTank, defender, secondTank, caster);
const arr = dreamTeam.toArray();
console.log(arr);

const t = new Team();

t.add('ffjffjf');

console.log(t);
