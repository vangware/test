import type { ReadOnlyArray } from "@vangware/types";
import type { TestResult } from "../types/TestResult";
import { stringifyTestResult } from "./stringifyTestResult";

/**
 * Takes an array of `TestResult` and returns an array of strings.
 *
 * @category Test
 */
export const stringifyTestResults = (testResults: ReadOnlyArray<TestResult>) =>
	testResults.map(stringifyTestResult);
