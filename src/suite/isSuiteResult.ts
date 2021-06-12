import { areTestResults } from "../test/areTestResults";
import type { SuiteResult } from "../types/SuiteResult";
import { isPlainObject } from "../utils/isPlainObject";

/**
 * Check if given value is a `SuiteResult` object.
 *
 * @category Suite
 */
export const isSuiteResult = <Actual>(
	value: Actual | SuiteResult
): value is SuiteResult =>
	isPlainObject(value) &&
	typeof value.name === "string" &&
	Array.isArray(value.failed) &&
	Array.isArray(value.passed) &&
	areTestResults(value.failed) &&
	areTestResults(value.passed);
