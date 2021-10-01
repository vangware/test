import type { ReadOnlyArray } from "@vangware/types";
import type { SuiteResult } from "../types/SuiteResult";
import { stringifySuiteResult } from "./stringifySuiteResult";

/**
 * Takes an array of `SuiteResult` and returns an array of strings.
 *
 * @category Suite
 */
export const stringifySuiteResults = (
	suiteResults: ReadOnlyArray<SuiteResult>,
) =>
	[...suiteResults]
		.sort(
			// eslint-disable-next-line max-params
			(nextSuite: SuiteResult, suite: SuiteResult) =>
				nextSuite.failed.length - suite.failed.length,
		)
		.map(stringifySuiteResult)
		.join("\n");
