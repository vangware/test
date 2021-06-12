import type { TestResult } from "../types/TestResult";
import { isTestResult } from "./isTestResult";

/**
 * Checks if given `TestResult` passed.
 *
 * @category Test
 */
export const isPassedTestResult = <Actual>(value: Actual | TestResult) =>
	isTestResult(value) && value.error === undefined;
