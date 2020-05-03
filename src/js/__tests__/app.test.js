import Character from '../app';


test('should change health', () => {
  const charact = new Character("Max", "Swordsman");
  charact.damage(10);
  expect(charact.health).toEqual(94);
});
