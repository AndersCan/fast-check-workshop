import * as fc from 'fast-check';
import { addCookie, getCookie } from '../src/task-003';

describe('cookie', () => {
  test('after setting a cookie, we can get it', () => {
    fc.assert(
      fc.property(fc.string(), fc.string(), (name, value) => {
        addCookie(name, value);
        const cookieValue = getCookie(name);
        expect(cookieValue).toEqual(value);
      })
    );
  });
});
