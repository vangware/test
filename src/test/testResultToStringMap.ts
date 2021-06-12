import type { ReadOnlyArray } from "@vangware/types";
import type { TestResult } from "../types/TestResult";
import { testResultToString } from "./testResultToString";

/**
 * Takes an array of `TestResult` and returns an array of strings.
 *
 * @category Test
 */
export const testResultToStringMap = (source: ReadOnlyArray<TestResult>) =>
	source.map(testResultToString);
