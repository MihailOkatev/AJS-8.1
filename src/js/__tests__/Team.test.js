
import { Team } from '../Team';
import { Swordsman } from '../Swordsman';
import { Undead } from '../Undead';

test('should throw error, not instance', () => {
  const result = function () {
    const team = new Team();
    team.add('fjffif');
  };

  expect(result).toThrow();
});

test('should throw error, already in team', () => {
  const result = function () {
    const team = new Team();
    const objA = new Swordsman('Richard');
    const objB = new Undead('Baba Yaga');
    team.add(objA).add(objB).add(objB);
  };

  expect(result).toThrow();
});

test('should build correct set', () => {
  const result = new Team();
  const objA = new Swordsman('Richard');
  const objB = new Undead('Baba Yaga');
  result.add(objA);
  result.add(objB);
  expect(result.members).toEqual(new Set([{
    name: 'Richard',
    type: 'Swordsman',
    level: 1,
    health: 100,
    defence: 10,
    attack: 40,
  }, {
    name: 'Baba Yaga',
    type: 'Undead',
    level: 1,
    health: 100,
    defence: 25,
    attack: 25,
  }]));
});

test('should build correct set using addAll method', () => {
  const result = new Team();
  const objA = new Swordsman('Richard');
  const objB = new Undead('Baba Yaga');
  result.addAll(objA, objB, objB, objA, objA, objA, objB, objB);
  expect(result.members).toEqual(new Set([{
    name: 'Richard',
    type: 'Swordsman',
    level: 1,
    health: 100,
    defence: 10,
    attack: 40,
  }, {
    name: 'Baba Yaga',
    type: 'Undead',
    level: 1,
    health: 100,
    defence: 25,
    attack: 25,
  }]));
});

test('test array transformation', () => {
  let result = new Team();
  const objA = new Swordsman('Richard');
  const objB = new Undead('Baba Yaga');
  result.add(objA);
  result.add(objB);
  result = result.toArray();
  expect(result).toEqual([{
    name: 'Richard',
    type: 'Swordsman',
    level: 1,
    health: 100,
    defence: 10,
    attack: 40,
  }, {
    name: 'Baba Yaga',
    type: 'Undead',
    level: 1,
    health: 100,
    defence: 25,
    attack: 25,
  }]);
});
