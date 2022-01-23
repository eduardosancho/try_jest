import reverseString from '../reverseString';

describe('Reverse a string', () => {
  test('function reverses name eduardo', () => {
    expect(reverseString('eduardo')).toBe('odraude');
  });
});