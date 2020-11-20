import { isUndefined } from "@vangware/utils";
import type { TestResult } from "../types/TestResult";
import { isTestResult } from "./isTestResult";

/**
 * Checks if given `TestResult` passed.
 *
 * @template Actual The actual type of the value.
 * @param testResult TestResult to check.
 */
export const isPassedTestResult = <Actual>(value: Actual | TestResult) =>
	isTestResult(value) && isUndefined(value.error);
