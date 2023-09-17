import { calculator } from './calculator';

test('add(2,5) should be 7', () => {
  expect(calculator.add(2, 5)).toBe(7);
});

test('add(2,5) should be -3', () => {
  expect(calculator.substruct(2, 5)).toBe(-3);
});

test('add(2,5) should be 0.4', () => {
  expect(calculator.divide(2, 5)).toBe(0.4);
});

test('add(2,5) should be 10', () => {
  expect(calculator.multiply(2, 5)).toBe(10);
});