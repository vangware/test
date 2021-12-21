import type { TestResult } from "../types/TestResult.js";
import { isPlainObject } from "../utils/isPlainObject.js";

/**
 * Check if given value is a `TestResult` object.
 *
 * @category Test
 */
export const isTestResult = <Actual>(
	value: Actual | TestResult,
): value is TestResult =>
	isPlainObject(value) && "given" in value && "must" in value;
