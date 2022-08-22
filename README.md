<img alt="Vangware's Test" src="./logo.svg" height="128" />

![Build Status][build-status-badge] ![Coverage][coverage-badge]
![License][license-badge] ![NPM Version][npm-version-badge]
![Open Issues][open-issues-badge]

✅ Equality test with enforced legibility (based on [RITEway][riteway] and
inspired by [uvu](https://github.com/lukeed/uvu)).

## Writing tests

### TypeScript

```typescript
import type { Tests } from "@vangware/test";
import { add } from "../src/add.js";

export default [
	{
		given: "a 1 and a 2",
		must: "return 3",
		received: () => add(2)(1),
		wanted: () => 3,
	},
	{
		given: "a 1 and a -2",
		must: "return -1",
		received: () => add(-2)(1),
		wanted: () => -1,
	},
] as Tests<number>;
```

### JavaScript

```javascript
import { add } from "../src/add.js";

/** @type {import("@vangware/test").Tests<number>} */
export default [
	{
		given: "a 1 and a 2",
		must: "return 3",
		received: () => add(2)(1),
		wanted: () => 3,
	},
	{
		given: "a 1 and a -2",
		must: "return -1",
		received: () => add(-2)(1),
		wanted: () => -1,
	},
];
```

### Alternatives

Instead of exporting an `Array` of `Test` as `default`, the export can also be a
single `Test`:

```typescript
import type { Test } from "@vangware/test";
import { add } from "../src/add.js";

export default {
	given: "a 1 and a 2",
	must: "return 3",
	received: () => add(2)(1),
	wanted: () => 3,
} as Test<number>;
```

Or multiple exports with different tests:

```typescript
import type { Test } from "@vangware/test";
import { add } from "../src/add.js";

export const test1: Test<number> = {
	given: "a 1 and a 2",
	must: "return 3",
	received: () => add(2)(1),
	wanted: () => 3,
};

export const test2: Test<number> = {
	given: "a 1 and a -2",
	must: "return -1",
	received: () => add(-2)(1),
	wanted: () => -1,
};
```

It can also be used directly without the `test` bin, by importing the different
utils directly:

```typescript
import { test } from "@vangware/test";
import { customFormatter } from "./customFormatter.js";

test({
	given: "a 1 and a 2",
	must: "return 3",
	received: () => add(2)(1),
	wanted: () => 3,
}).then(customFormatter);
```

## Running

This should suffice:

```bash
npx test
```

When working with TypeScript files directly, [ts-node](https://npm.im/ts-node)
is required, and then to run it:

```bash
NODE_OPTIONS='--loader ts-node/esm' npx test
```

## Coverage

[c8](https://npm.im/c8) can be added and then:

```bash
# For JavaScript
npx c8 test

# For TypesScript
NODE_OPTIONS='--loader ts-node/esm' npx c8 test
```

## Output

If a test fails, it looks like this:

```text
[TEST] ./tests/example.test.ts
[FAIL] Given a 1 and a 2, must return 3, but...
	└ it has the wrong value. Wanted 3 but received 4.
```

And if the wanted/received type is more complex, like an object, then the output
goes into details about the error:

```text
[TEST] ./tests/example.test.ts
[FAIL] Given an object, must add a single property, but...
	├ foo.bar has the wrong value. Wanted 1 but received 2.
	├ foo.baz.1 is missing.
	└ bar was set with the value "bar".
```

## Documentation

Documentation can be found [HERE][documentation]. It is auto-generated with
[typedoc][typedoc] based on the JSDocs and the types in the source. Shouldn't be
necessary to read this, code editors like [VS Code][vscode] integrate the
documentation in the UI.

## Changelog

Changelog can be found [HERE][changelog].

## Test coverage

Test coverage can be found [HERE][coverage].

<!-- Reference -->

[build-status-badge]:
	https://img.shields.io/github/workflow/status/vangware/test/Test.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/test/actions
[changelog]: https://github.com/vangware/test/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/test.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/test
[coverage]: https://coveralls.io/github/vangware/test
[documentation]: https://test.vangware.com
[license-badge]:
	https://img.shields.io/npm/l/@vangware/test.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/test/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/test.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/test
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/test.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/test/issues
[riteway]: https://github.com/ericelliott/riteway
[typedoc]: https://typedoc.org/
[uvu]: https://github.com/lukeed/uvu
[vscode]: https://code.visualstudio.com/
