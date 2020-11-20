import { testMap } from "../test/testMap";
import { testResultsFilterTuple } from "../test/testResultsFilterTuple";
import type { SuiteResult } from "../types/SuiteResult";
import type { Test } from "../types/Test";

/**
 * Creates a new test suite (array of tests).
 *
 * @template Value The value being checked in the test.
 * @param tests List of test descriptions.
 */
export const suite = <Value>(tests: readonly Test<Value>[]) =>
	/**
	 * @param name Name of the suite.
	 */
	(name: string): Promise<SuiteResult> =>
		Promise.all(testMap(tests))
			.then(testResultsFilterTuple)
			.then(([passed, failed]) => ({
				failed,
				name,
				passed
			}));
