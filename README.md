![@vangware/test](https://i.imgur.com/ywl00fk.png)

![Build Status](https://img.shields.io/github/workflow/status/vangware/test/Test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/test/actions)
![Coverage](https://img.shields.io/coveralls/github/vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://coveralls.io/github/vangware/test)
![License](https://img.shields.io/npm/l/@vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/test/blob/main/LICENSE)
![NPM Version](https://img.shields.io/npm/v/@vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://npm.im/@vangware/test)
![Open Issues](https://img.shields.io/github/issues/vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/test/issues)
![Size](https://img.shields.io/bundlephobia/minzip/@vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&label=size&link=https://bundlephobia.com/result?p=@vangware/test)

✅ Equality test with enforced legibility (based on [RITEway](https://github.com/ericelliott/riteway) and inspired by [uvu](https://github.com/lukeed/uvu)).

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

Documentation can be found [HERE](https://test.vangware.com). It is auto-generated with [typedoc](https://typedoc.org/) based on the JSDocs and the types in the source. Shouldn't be necessary to read this, code editors like [VSCode](https://code.visualstudio.com/) integrate the documentation in the UI.

## Changelog

Changelog can be found [HERE](https://github.com/vangware/test/blob/main/CHANGELOG.md).

## Test coverage

Test coverage can be found [HERE](https://coveralls.io/github/vangware/test).
