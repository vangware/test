import type { TestResult } from "../types/TestResult.js";
import { isTestResult } from "./isTestResult.js";

/**
 * Checks if given `TestResult` passed.
 *
 * @category Test
 */
export const isPassedTestResult = <Actual>(value: Actual | TestResult) =>
	isTestResult(value) && value.error === undefined;
