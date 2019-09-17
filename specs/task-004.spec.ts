import * as fc from 'fast-check';
import { LightAction, LightState, lightReducer } from '../src/task-004';

test('either red or green is on', () => {
  fc.assert(
    fc.property(stateArbitrary, actionArbitrary, (state, action) => {
      const newState = lightReducer(state, action);
      expect(newState.red).not.toBe(newState.green);
    })
  );
});

const actionArbitrary: fc.Arbitrary<LightAction> = fc.constantFrom<LightAction>(
  'red',
  'yellow',
  'green'
);

const stateArbitrary: fc.Arbitrary<LightState> = fc
  .tuple(fc.boolean(), fc.boolean(), fc.boolean())
  .map(([red, yellow, green]) => {
    return { red, yellow, green };
  });
