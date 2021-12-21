import type { ReadOnlyArray } from "@vangware/types";
import { testMap } from "../test/testMap.js";
import { testResultsFilterTuple } from "../test/testResultsFilterTuple.js";
import type { SuiteResult } from "../types/SuiteResult.js";
import type { Test } from "../types/Test.js";

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
