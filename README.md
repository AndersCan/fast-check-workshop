# fast-check-workshop
fast-check-hero-workshop

> Program testing can be used to show the presence of bugs, but never to show their absence!
> -Edsger W. Dijkstra


# Glossary


## Property
> Property: an attribute, quality, or characteristic of something.

For example, a property of the function below is that it always returns `0`.

```javascript
function getZero() {
 return 0;
}
```

## Unit testing vs Property testing
> Unit test — testing with constants (static)
> Property test — testing with variables (dynamic)




## Arbitrary
Think of this as a  your _variable (random value)_. An _arbitrary_ is what you will use as input.

In reality it is a value that you can shrink and seed.

## Bias
> Smart: biased by default - by default it generates both small and large values, making it easier to dig into counterexamples without having to tweak a size parameter manually

## Shrinking
After finding a failing case, attempt to `shrink` the arbitrary value(s) and produce another failing case.

Used to find the _minimal counterexample_

## Seed
Seeding a `random` function with the same seed will make it repeat the same output for every run.


# Model based testing 
A model is a simplified/abstract version of a real system. 

Ref: [Model based testing](https://github.com/dubzzz/fast-check/blob/master/documentation/1-Guides/Tips.md#model-based-testing-or-ui-test)