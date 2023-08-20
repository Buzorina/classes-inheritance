import Swordsman from '../swordsman';

test('Check Swordsman class', () => {
  const result = new Swordsman('name');
  expect(result).toEqual({
    name: 'name',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
