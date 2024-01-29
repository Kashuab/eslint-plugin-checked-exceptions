# Prohibits calling a function that could throw errors without catching them (`uncaught-errors`)

## Rule Details

This rule aims to encourage developers to catch error(s) that a function could throw when calling it.

Examples of **incorrect** code for this rule:

```js
// Ignore me
/**
 * @throws {Error}
 * @param test
 */
function dangerous() {
  throw new Error();  
}

dangerous(); // `dangerous` is known to throw `Error`
```

Examples of **correct** code for this rule:

```js
/**
 * @throws {Error}
 */
function dangerous() {
  throw new Error();
}

try {
  dangerous();
} catch (error) {
  // Handle error
}
```

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
