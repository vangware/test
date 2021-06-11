import { dimmed, foregroundGreen, foregroundRed } from "@vangware/ansi";
import { isUndefined } from "@vangware/utils";
import type { TestResult } from "../types/TestResult";

/**
 * Takes a `TestResult` and returns the name of the test.
 *
 * @param testResult TestResult to get the name from.
 */
export const testName = ({ given, must, error }: TestResult) =>
	`${(isUndefined(error) ? foregroundGreen : foregroundRed)(">")} ${dimmed(
		"Given"
	)} ${given}${dimmed(", must")} ${must}`;
