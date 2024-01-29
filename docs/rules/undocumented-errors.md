# Enforce @throws comments for thrown errors. (`undocumented-errors`)

TODO: Please describe the origin of the rule here.

## Rule Details

This rule aims to encourage developers to describe the errors that a function throws.

Examples of **incorrect** code for this rule:

```js
function dangerous() {
  throw new Error();
}
```

Examples of **correct** code for this rule:

```js
/**
 * @throws {Error}
 */
function dangerous() {
  throw new Error();
}
```


## When Not To Use It

TODO: Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

TODO: If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
