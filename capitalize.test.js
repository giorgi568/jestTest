import { capitalize } from './capitalize';

test('string should be String', () => {
  expect(capitalize('string')).toBe('String');
});

test('handles empty strings', () => {
  expect(capitalize('')).toBeNull();
});
