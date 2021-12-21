import type { ReadOnlyArray } from "@vangware/types";
import type { TestResult } from "../types/TestResult.js";
import { stringifyTestResult } from "./stringifyTestResult.js";

/**
 * Takes an array of `TestResult` and returns an array of strings.
 *
 * @category Test
 */
export const stringifyTestResults = (testResults: ReadOnlyArray<TestResult>) =>
	testResults.map(stringifyTestResult);
