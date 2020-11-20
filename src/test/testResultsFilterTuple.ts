import { arrayFilterTuple } from "@vangware/utils";
import type { TestResult } from "../types/TestResult";
import { isPassedTestResult } from "./isPassedTestResult";

/**
 * Filter tests results in a tuple `[passed, failed]`.
 */
export const testResultsFilterTuple = arrayFilterTuple<TestResult, TestResult>(
	isPassedTestResult
);
