import type { ReadOnlyArray } from "@vangware/types";
import type { TestResult } from "../types/TestResult.js";
import { isPassedTestResult } from "./isPassedTestResult.js";

/**
 * Filter tests results in a tuple `[passed, failed]`.
 *
 * @category Test
 */
export const testResultsFilterTuple = (
	testResults: ReadOnlyArray<TestResult>,
) =>
	[
		testResults.filter(isPassedTestResult),
		testResults.filter(item => !isPassedTestResult(item)),
	] as const;
