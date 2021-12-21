import type { TestResult } from "../types/TestResult.js";
import { isPassedTestResult } from "./isPassedTestResult.js";
import { testName } from "./testName.js";

/**
 * Takes a `TestResult` and returns a stringified version of it.
 *
 * @category Test
 */
export const stringifyTestResult = (testResult: TestResult) =>
	`${testName(testResult)}${
		isPassedTestResult(testResult)
			? "."
			: `:\n\n${(testResult as Required<TestResult>).error}\n`
	}`;
