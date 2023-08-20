export default class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
    if (typeof (name) !== 'string' || !(name.length >= 2 && name.length <= 10)) {
      throw new Error('Invalid value');
    } else {
      this.name = name;
    }
    if (typeof (type) !== 'string' || !types.includes(type)) {
      throw new Error('Invalid name value');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('It is impossible to level up a dead character');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health <= 0) {
      this.health = 0;
    }
  }
}
