import { ReadOnlyObjectArray } from "@vangware/utils";
import { testMap } from "../test/testMap";
import { testResultsFilterTuple } from "../test/testResultsFilterTuple";
import { SuiteResult } from "../types/SuiteResult";
import { Test } from "../types/Test";

/**
 * Creates a new test suite (array of tests).
 * @param tests List of test descriptions.
 */
export const suite = <Value>(tests: ReadOnlyObjectArray<Test<Value>>) =>
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
