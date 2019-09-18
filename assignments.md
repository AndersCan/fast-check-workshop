# Assignments

## Boilerplate

```javascript
test('jest testname', () => {
  fc.assert(
    fc.property(fc.integer(), (a) => {
      expect(a).toEqual(a);
    })
  );
});
```

## Task 001

In this task we will test the properties of addition (+)

There are four mathematical properties which involve addition. The properties are the commutative, associative, additive identity and distributive properties.

1. Commutative property: When two numbers are added, the sum is the same regardless of the order of the addends.
   For example `4 + 2 = 2 + 4`

2. Associative Property: When three or more numbers are added, the sum is the same regardless of the grouping of the addends.
   For example `(2 + 3) + 4 = 2 + (3 + 4)`

3. Additive Identity Property: The sum of any number and zero is the original number.
   For example `5 + 0 = 5.`

4. Distributive property: The sum of two numbers times a third number is equal to the sum of each addend times the third number.
   For example `4 * (6 + 3) = 4*6 + 4*3`

## Task 002

The opposite of `JSON.parse` is `JSON.stringify`. Can you write a property that "proves" this?

<details>
<summary>Spoiler/hint</summary>

use the arbitrary `anything` (`fc.anything()`)

</details>

### Part 2

Can you write a propertybased test for `parseDurationToText`? You can decide the properties you want to test

## Task 003

A common thing to do as a web developer is to store data to a cookie and, at a later point, retrieve it.

Prove that after storing a cookie we can retrieve the same cookie.

## Task 004

Now we will create a traffic light with `Red`, `Yellow`, and `Green` lights.

Prove that it is safe - red and green are never on at the same time.
