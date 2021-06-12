import type { TestResult } from "../types/TestResult";
import { isPlainObject } from "../utils/isPlainObject";

/**
 * Check if given value is a `TestResult` object.
 *
 * @category Test
 */
export const isTestResult = <Actual>(
	value: Actual | TestResult
): value is TestResult =>
	isPlainObject(value) &&
	typeof value.given === "string" &&
	typeof value.must === "string";
