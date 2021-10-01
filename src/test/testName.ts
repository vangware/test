import { dimmed, foregroundGreen, foregroundRed } from "@vangware/ansi";
import type { TestResult } from "../types/TestResult";

/**
 * Takes a `TestResult` and returns the name of the test.
 *
 * @category Test
 */
export const testName = ({ given, must, error }: TestResult) =>
	`${(error === undefined ? foregroundGreen : foregroundRed)(">")} ${dimmed(
		"Given",
	)} ${given}${dimmed(", must")} ${must}`;
