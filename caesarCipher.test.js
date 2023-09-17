import { ceasarCipher } from './caesarCipher';

test('ceasarCipher(car, 1) - dbs', () => {
  expect(ceasarCipher('car', 1)).toBe('dbs');
});

test('ceasarCipher(Car, 1) - Dbs', () => {
  expect(ceasarCipher('Car', 1)).toBe('Dbs');
});

test('ceasarCipher(Car!, 1) - Dbs!', () => {
  expect(ceasarCipher('Car!', 1)).toBe('Dbs!');
});

test('ceasarCipher(C a r !, 1) - D b s !', () => {
  expect(ceasarCipher('C a r !', 1)).toBe('D b s !');
});

test('ceasarCipher(raven, 10) - bkfox', () => {
  expect(ceasarCipher('raven', 10)).toBe('bkfox');
});

test('ceasarCipher(defend the east wall of the castle, 18) - vwxwfv lzw wskl osdd gx lzw uskldw', () => {
  expect(ceasarCipher('defend the east wall of the castle', 18)).toBe('vwxwfv lzw wskl osdd gx lzw uskldw');
});
