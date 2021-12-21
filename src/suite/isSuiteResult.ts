import { areTestResults } from "../test/areTestResults.js";
import type { SuiteResult } from "../types/SuiteResult.js";
import { isPlainObject } from "../utils/isPlainObject.js";

/**
 * Check if given value is a `SuiteResult` object.
 *
 * @category Suite
 */
export const isSuiteResult = <Actual>(
	value: Actual | SuiteResult,
): value is SuiteResult =>
	isPlainObject(value) &&
	"name" in value &&
	Array.isArray(value.failed) &&
	Array.isArray(value.passed) &&
	areTestResults(value.failed) &&
	areTestResults(value.passed);
