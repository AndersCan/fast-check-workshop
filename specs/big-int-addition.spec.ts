import * as fc from 'fast-check';
import { bigIntAddition } from '../src/big-int-addition';

test('big int is same as addition', () => {
  fc.assert(
    fc.property(
      fc.integer(0, Number.MAX_SAFE_INTEGER),
      fc.integer(0, Number.MAX_SAFE_INTEGER),
      (a, b) => {
        const result = Number.parseInt(
          bigIntAddition(a.toString(), b.toString())
        );
        expect(result).toEqual(a + b);
        // console.log({ result, res: a + b });
      }
    )
  );
});
