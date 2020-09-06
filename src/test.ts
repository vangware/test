import { equal } from "@vangware/utils";
import { test as uvu } from "uvu";
import { TestError } from "./TestError";
import { TestFunction } from "./TestFunction";

/**
 * Test wrapper which takes an array of `TestOptions` and run them all together.
 * @param tests Array of `TestOptions`.
 */
export const test: TestFunction = tests => {
	// eslint-disable-next-line functional/no-expression-statement
	tests.map(({ given, must, received, wanted }) =>
		// eslint-disable-next-line functional/functional-parameters
		uvu(`Given ${given}, must ${must}.`, async () => {
			// eslint-disable-next-line functional/no-conditional-statement
			if (
				!equal(received instanceof Promise ? await received : received)(
					wanted instanceof Promise ? await wanted : wanted
				)
			) {
				// eslint-disable-next-line functional/no-throw-statement
				throw new TestError({
					received,
					wanted
				});
			}
		})
	);

	return uvu.run();
};

export default test;
