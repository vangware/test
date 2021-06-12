import type { ReadOnlyArray } from "@vangware/types";
import type { TestResult } from "../types/TestResult";
import { isTestResult } from "./isTestResult";

/**
 * Check if all the items in an array are `TestResult`s.
 *
 * @category Test
 */
export const areTestResults = (
	source: ReadOnlyArray
): source is ReadOnlyArray<TestResult> => source.every(isTestResult);
