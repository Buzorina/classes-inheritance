import Bowerman from '../bowerman';

test('Check Bowerman class', () => {
  const result = new Bowerman('name');
  expect(result).toEqual({
    name: 'name',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
