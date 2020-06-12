import { Character } from './Character';

// eslint-disable-next-line import/prefer-default-export
export class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (character instanceof Character === false) {
      throw new Error('переданный объект не является объектом класса Character');
    }
    if (this.members.has(character)) {
      throw new Error('Данный персонаж уже есть в команде');
    }
    this.members.add(character);
  }

  addAll(...rest) {
    rest.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}
