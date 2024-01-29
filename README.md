# eslint-plugin-checked-exceptions

Encourages handling of documented errors

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-checked-exceptions`:

```sh
npm install eslint-plugin-checked-exceptions --save-dev
```

## Usage

Add `checked-exceptions` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "checked-exceptions"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "checked-exceptions/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


