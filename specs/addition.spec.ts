import * as fc from 'fast-check';
import { addition } from '../src/addition';

/**
There are four mathematical properties which involve addition. The properties are the commutative, associative, additive identity and distributive properties.

Commutative property: When two numbers are added, the sum is the same regardless of the order of the addends. For example 4 + 2 = 2 + 4

Associative Property: When three or more numbers are added, the sum is the same regardless of the grouping of the addends. For example (2 + 3) + 4 = 2 + (3 + 4)

Additive Identity Property: The sum of any number and zero is the original number. For example 5 + 0 = 5.

Distributive property: The sum of two numbers times a third number is equal to the sum of each addend times the third number. For example 4 * (6 + 3) = 4*6 + 4*3
 */

test('addition - Commutative property', () => {
  fc.assert(
    fc.property(fc.integer(), fc.integer(), (a, b) => {
      expect(a + b).toEqual(b + a);
    })
  );
});

// Associative Property: When three or more numbers are added, the sum is the same regardless of the grouping of the addends. For example (2 + 3) + 4 = 2 + (3 + 4)

test('addition - Associative Property', () => {
  const shuffle = (array: number[]) => array.sort(() => Math.random() - 0.5);
  fc.assert(
    fc.property(fc.array(fc.integer(), 3, 100), (arr) => {
      const sumA = shuffle(arr).reduce(addition);
      const sumB = shuffle(arr).reduce(addition);
      expect(sumA).toEqual(sumB);
    })
  );
});

// Additive Identity Property: The sum of any number and zero is the original number. For example 5 + 0 = 5.

test('addition - Additive Identity Property', () => {
  fc.assert(
    fc.property(fc.integer(), (a) => {
      expect(a + 0).toEqual(a);
    })
  );
});

// Distributive property: The sum of two numbers times a third number is equal to the sum of each addend times the third number. For example 4 * (6 + 3) = 4*6 + 4*3

test('addition - Distributive property', () => {
  fc.assert(
    fc.property(fc.integer(), fc.integer(), fc.integer(), (a, b, c) => {
      expect(a * (b + c)).toEqual(a * b + a * c);
    })
  );
});
