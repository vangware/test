import type { ReadOnlyArray } from "@vangware/types";
import { testMap } from "../test/testMap";
import { testResultsFilterTuple } from "../test/testResultsFilterTuple";
import type { SuiteResult } from "../types/SuiteResult";
import type { Test } from "../types/Test";

/**
 * Creates a new test suite (array of tests).
 *
 * @category Suite
 */
export const suite =
	<Value>(tests: ReadOnlyArray<Test<Value>>) =>
	(name: string): Promise<SuiteResult> =>
		Promise.all(testMap(tests))
			.then(testResultsFilterTuple)
			.then(([passed, failed]) => ({
				failed,
				name,
				passed,
			}));
