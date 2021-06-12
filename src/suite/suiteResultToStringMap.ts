import type { ReadOnlyArray } from "@vangware/types";
import type { SuiteResult } from "../types/SuiteResult";
import { suiteResultToString } from "./suiteResultToString";

/**
 * Takes an array of `SuiteResult` and returns an array of strings.
 *
 * @category Suite
 */
export const suiteResultToStringMap = (suites: ReadOnlyArray<SuiteResult>) =>
	[...suites]
		.sort(
			// eslint-disable-next-line max-params
			(nextSuite: SuiteResult, suite: SuiteResult) =>
				nextSuite.failed.length - suite.failed.length
		)
		.map(suiteResultToString)
		.join("\n");
