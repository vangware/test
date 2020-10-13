![@vangware/test](https://i.imgur.com/ywl00fk.png)

![License](https://img.shields.io/npm/l/@vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/test/blob/main/LICENSE)
![NPM Version](https://img.shields.io/npm/v/@vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://npm.im/@vangware/test)
![Open Issues](https://img.shields.io/github/issues/vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/test/issues)
![Size](https://img.shields.io/bundlephobia/minzip/@vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&label=size&link=https://bundlephobia.com/result?p=@vangware/test)

Simple equality test with enforced legibility (based on [RITEway](https://github.com/ericelliott/riteway) and inspired by [uvu](https://github.com/lukeed/uvu)).

## Usage

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

```bash
test
```

If let's say the first test fails, the error reads something like this:
```
[SUITE] Example suite name (optional)

[FAIL] Given a 1 and a 2, must return 3.

Received: 4
Wanted:   3

[PASS] Given a 1 and a -2, must return -1.

```
