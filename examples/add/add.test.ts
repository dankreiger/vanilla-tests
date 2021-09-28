import { expect, test } from '../../src';
import { add } from './add';

test('adds two numbers', () => {
  expect(add(5, 2)).toBe(7);
});
