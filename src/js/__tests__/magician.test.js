import Magician from '../magician';

test('Check Magician class', () => {
  const result = new Magician('name');
  expect(result).toEqual({
    name: 'name',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
