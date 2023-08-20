import Character from '../character';

test('check name in character class', () => {
  expect(() => new Character('TooLongName')).toThrow();
});

test('check type in character class', () => {
  expect(() => new Character('name', 'invalidType')).toThrow();
});

test('check level up for dead character', () => {
  const character = new Character('name', 'Zombie');
  character.health = 0;
  expect(() => character.levelUp()).toThrow();
});

test('check level up for living character', () => {
  const character = new Character('name', 'Zombie');
  character.attack = 40;
  character.defence = 10;
  character.levelUp();
  expect(character).toEqual({
    name: 'name',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  });
});

test('check damage method for dead character', () => {
  const character = new Character('name', 'Zombie');
  character.health = 5;
  character.defence = 10;
  character.damage(100);
  expect(character.health).toBe(0);
});

test('check damage method for living character', () => {
  const character = new Character('name', 'Zombie');
  character.health = 100;
  character.defence = 10;
  character.damage(100);
  expect(character.health).toEqual(10);
});
