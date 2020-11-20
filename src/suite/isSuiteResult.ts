import { isArray, isObject, isString } from "@vangware/utils";
import { everyIsTestResult } from "../test/everyIsTestResult";
import type { SuiteResult } from "../types/SuiteResult";

/**
 * Check if given value is a `SuiteResult` object.
 *
 * @param value Value to check.
 */
export const isSuiteResult = <Actual>(
	value: Actual | SuiteResult
): value is SuiteResult =>
	isObject(value) &&
	isString(value.name) &&
	isArray(value.failed) &&
	isArray(value.passed) &&
	everyIsTestResult(value.failed) &&
	everyIsTestResult(value.passed);
