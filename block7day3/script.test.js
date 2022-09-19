const { expect } = require('expect');
const sum = require('./script');

test('Check values', () => {
  expect(sum(1,2)).toBe(3);
});