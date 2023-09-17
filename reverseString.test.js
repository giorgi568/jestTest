import { reverseString } from './reverseString';

test('reverses car to rac', () => {
  expect(reverseString('car')).toBe('rac');
});
test('reverses racecar to racecar', () => {
  expect(reverseString('racecar')).toBe('racecar');
});
