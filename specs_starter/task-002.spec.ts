import * as fc from 'fast-check';

describe('JSON parse', () => {
  test('parse and unparse gives same result', () => {
    fc.assert(
      fc.property(fc.anything(), (anything) => {
        const expected = anything;
        const result = JSON.parse(JSON.stringify(anything));
        expect(result).toEqual(expected);
      }),
      {}
    );
  });
});
