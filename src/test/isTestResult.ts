import { isObject, isString } from "@vangware/utils";
import type { TestResult } from "../types/TestResult";

/**
 * Check if given value is a `TestResult` object.
 *
 * @param Actual The actual type of the value.
 * @param value Value to check.
 */
export const isTestResult = <Actual>(
	value: Actual | TestResult
): value is TestResult =>
	isObject(value) &&
	"given" in value &&
	"must" in value &&
	isString(value.given) &&
	isString(value.must);
