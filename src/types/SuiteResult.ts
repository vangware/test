import type { ReadOnlyArray } from "@vangware/types";
import type { TestResult } from "./TestResult";

/**
 * Output object given by a suite.
 *
 * @category Suite
 */
export type SuiteResult = {
	/** Array of failed tests. */
	readonly failed: ReadOnlyArray<TestResult>;

	/** Name of the test suite. */
	readonly name: string;

	/** Array of passed tests. */
	readonly passed: ReadOnlyArray<TestResult>;
};
