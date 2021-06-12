import type { ReadOnlyArray } from "@vangware/types";
import type { TestResult } from "../types/TestResult";
import { isPassedTestResult } from "./isPassedTestResult";

/**
 * Filter tests results in a tuple `[passed, failed]`.
 *
 * @category Test
 */
export const testResultsFilterTuple = (source: ReadOnlyArray<TestResult>) =>
	[
		source.filter(isPassedTestResult),
		source.filter(item => !isPassedTestResult(item))
	] as const;
