import { test as uvu } from "uvu";
import { equal } from "uvu/assert";
import { TestFunction } from "./TestFunction";

/**
 * Test wrapper which takes an array of `TestOptions` and run them all together.
 * @param tests Array of `TestOptions`.
 */
export const test: TestFunction = tests => {
	// eslint-disable-next-line functional/no-expression-statement
	tests.map(({ given, must, received, wanted }) =>
		// eslint-disable-next-line functional/functional-parameters
		uvu(`Given ${given}, must ${must}.`, async () =>
			equal(
				received instanceof Promise ? await received : received,
				wanted instanceof Promise ? await wanted : wanted
			)
		)
	);

	return uvu.run();
};

export default test;
