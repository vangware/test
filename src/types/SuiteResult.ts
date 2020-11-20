import type { TestResult } from "./TestResult";

/**
 * Output object given by a suite.
 */
export type SuiteResult = {
	/**
	 * Array of failed tests.
	 */
	readonly failed: readonly TestResult[];

	/**
	 * Name of the test suite.
	 */
	readonly name: string;

	/**
	 * Array of passed tests.
	 */
	readonly passed: readonly TestResult[];
};
