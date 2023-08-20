import Zombie from '../zombie';

test('Check Zombie class', () => {
  const result = new Zombie('name');
  expect(result).toEqual({
    name: 'name',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
