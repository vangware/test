import type { TestResult } from "../types/TestResult";
import { isPassedTestResult } from "./isPassedTestResult";
import { testName } from "./testName";

/**
 * Takes a `TestResult` and returns a stringified version of it.
 *
 * @category Test
 */
export const testResultToString = (testResult: TestResult) =>
	`${testName(testResult)}${
		isPassedTestResult(testResult)
			? "."
			: `:\n\n${(testResult as Required<TestResult>).error}\n`
	}`;
