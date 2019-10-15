const getZodiacSign = require('./index');

test('Returns the correct zodiac sign', () => {
  expect(getZodiacSign(1, 19)).toBe('Capricorn');
});

test('Returns the correct zodiac sign', () => {
  expect(getZodiacSign(1, 20)).toBe('Aquarius');
});

test('Returns the correct zodiac sign', () => {
  expect(getZodiacSign(2, 18)).toBe('Aquarius');
});

test('Returns the correct zodiac sign', () => {
  expect(getZodiacSign(2, 19)).toBe('Pisces');
});