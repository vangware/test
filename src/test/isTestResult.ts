import { isObject, isString } from "@vangware/utils";
import { TestResult } from "../types/TestResult";

/**
 * Check if given value is a `TestResult` object.
 * @param value Value to check.
 */
export const isTestResult = (value: unknown): value is TestResult =>
	isObject(value) &&
	"given" in value &&
	isString(value.given) &&
	"must" in value &&
	isString(value.must);
