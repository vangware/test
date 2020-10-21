import { isArray, isObject, isString } from "@vangware/utils";
import { isTestResult } from "../test/isTestResult";
import { SuiteResult } from "../types/SuiteResult";

/**
 * Check if given value is a `SuiteResult` object.
 * @param value Value to check.
 */
export const isSuiteResult = (value: unknown): value is SuiteResult =>
	isObject(value) &&
	"name" in value &&
	isString(value.name) &&
	"failed" in value &&
	isArray(value.failed) &&
	value.failed.every(isTestResult) &&
	"passed" in value &&
	isArray(value.passed) &&
	value.passed.every(isTestResult);
