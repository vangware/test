import { arrayMap, arraySort } from "@vangware/utils";
import type { SuiteResult } from "../types/SuiteResult";
import { joinNewLine } from "../utils/joinNewLine";
import { suiteResultToString } from "./suiteResultToString";

/**
 * Takes an array of `SuiteResult` and returns an array of strings.
 */
export const suiteResultToStringMap = (suites: ReadonlyArray<SuiteResult>) =>
	joinNewLine(
		arrayMap(suiteResultToString)(
			arraySort(
				(nextSuite: SuiteResult) => (suite: SuiteResult) =>
					nextSuite.failed.length - suite.failed.length
			)(suites)
		)
	);
