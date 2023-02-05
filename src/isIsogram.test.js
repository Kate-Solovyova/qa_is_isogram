'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be declared`, () => {
    const result = isIsogram('');
    expect(typeof result === 'boolean')
      .toBeTruthy();
  });

  it(`if input is empty string, should return true`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`if input has two the same letters, should return false`, () => {
    expect(isIsogram('look'))
      .toBe(false);
  });

  it(`if the input has each letter occurs 1 time, should return true`, () => {
    expect(isIsogram('playgrounds'))
      .toBe(true);
  });

  it(`if input has two or more letters in different cases, should return false`, () => {
    expect(isIsogram('Adam'))
      .toBe(false);
  });
});
