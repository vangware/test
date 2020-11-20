import type { TestResult } from "../types/TestResult";
import { isPassedTestResult } from "./isPassedTestResult";
import { testName } from "./testName";

/**
 * Takes a `TestResult` and returns a stringified version of it.
 *
 * @param testResult TestResult to generate the string from.
 */
export const testResultToString = (testResult: TestResult) =>
	`${testName(testResult)}${
		isPassedTestResult(testResult) ? "." : `:\n\n${testResult.error}\n`
	}`;
