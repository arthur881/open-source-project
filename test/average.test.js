import calcMoy from '../src/average.js';

describe('calcMoy()', () => {
  it('should return NaN if the data is not an array', () => {
    const data = 'foo';
    expect(calcMoy(data)).toBeNaN();
  });

  it('should return NaN if the data is not an array of finite numbers', () => {
    const data = ['foo', 1, 2];
    expect(calcMoy(data)).toBeNaN();
  });

  it('should return the calcMoy of an array of numbers', () => {
    const data = [1, 2, 3];
    expect(calcMoy(data)).toBe(2);
  });
});