![@vangware/test](https://i.imgur.com/ywl00fk.png)

![License](https://img.shields.io/npm/l/@vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/test/blob/main/LICENSE)
![NPM Version](https://img.shields.io/npm/v/@vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://npm.im/@vangware/test)
![Open Issues](https://img.shields.io/github/issues/vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/test/issues)
![Size](https://img.shields.io/bundlephobia/minzip/@vangware/test.svg?style=for-the-badge&labelColor=666&color=2b7&label=size&link=https://bundlephobia.com/result?p=@vangware/test)

Wrapper of [uvu](https://github.com/lukeed/uvu) that enforces legibility (based on [RITEway](https://github.com/ericelliott/riteway)).

## Usage

```typescript
import { test } from "@vangware/test"; // or: import test from "@vangware/test";

const add = (addend2: number) => (addend1: number) => addend1 + addend2;

test([
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
]);
```

If let's say the first test fails, the error reads something like this:
```
[FAIL] Given a 1 and a 2, must return 3.
    ++3    (Expected)
    --4    (Actual)
```

## Future

In the near future, this library will move away from uvu to just have equality assertions.
