<img alt="Vangware's Test" src="./logo.svg" height="192" />

![Build Status][build-status-badge]
![Coverage][coverage-badge]
![License][license-badge]
![NPM Version][npm-version-badge]
![Open Issues][open-issues-badge]

✅ Equality test with enforced legibility (based on [RITEway][riteway] and inspired by [uvu](https://github.com/lukeed/uvu)).

## Usage

Write:

```typescript
import { suite } from "@vangware/test";

const add = (addend2: number) => (addend1: number) => addend1 + addend2;

export default suite([
	{
		given: "a 1 and a 2",
		must: "return 3",
		received: add(2)(1),
		wanted: 3
	},
	{
		given: "a 1 and a -2",
		must: "return -1",
		received: add(-2)(1),
		wanted: -1
	}
])("Example suite name (optional)");
```

Then run:

```bash
@vangware/test
```

If let's say the first test fails, the error reads something like this:

```
[FAIL] Example suite name (optional)

> Given a 1 and a 2, must return 3.

Received: 4
Wanted:   3
```

## Documentation

Documentation can be found [HERE][documentation]. It is auto-generated with [typedoc][typedoc] based on the JSDocs and the types in the source. Shouldn't be necessary to read this, code editors like [VSCode][vscode] integrate the documentation in the UI.

## Changelog

Changelog can be found [HERE][changelog].

## Test coverage

Test coverage can be found [HERE][coverage].

<!-- Reference -->

[build-status-badge]: https://img.shields.io/github/workflow/status/vangware/test/Test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/test/actions
[changelog]: https://github.com/vangware/test/blob/main/CHANGELOG.md
[coverage-badge]: https://img.shields.io/coveralls/github/vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://coveralls.io/github/vangware/test
[coverage]: https://coveralls.io/github/vangware/test
[documentation]: https://test.vangware.com
[license-badge]: https://img.shields.io/npm/l/@vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/test/blob/main/LICENSE
[npm-version-badge]: https://img.shields.io/npm/v/@vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://npm.im/@vangware/test
[open-issues-badge]: https://img.shields.io/github/issues/vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/test/issues
[riteway]: https://github.com/ericelliott/riteway
[typedoc]: https://typedoc.org/
[uvu]: https://github.com/lukeed/uvu
[vscode]: https://code.visualstudio.com/
