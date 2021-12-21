import type { ReadOnlyArray } from "@vangware/types";
import type { TestResult } from "../types/TestResult.js";
import { isTestResult } from "./isTestResult.js";

/**
 * Check if all the items in an array are `TestResult`s.
 *
 * @category Test
 */
export const areTestResults = (
	maybeTestResults: ReadOnlyArray,
): maybeTestResults is ReadOnlyArray<TestResult> =>
	maybeTestResults.every(isTestResult);
