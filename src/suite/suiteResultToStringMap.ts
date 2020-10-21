import { arrayMap, arraySort, ReadOnlyObjectArray } from "@vangware/utils";
import { SuiteResult } from "../types/SuiteResult";
import { joinNewLine } from "../utils/joinNewLine";
import { suiteResultToString } from "./suiteResultToString";

/**
 * Takes an array of `SuiteResult` and returns an array of strings.
 */
export const suiteResultToStringMap = (
	suites: ReadOnlyObjectArray<SuiteResult>
) =>
	joinNewLine(
		arrayMap(suiteResultToString)(
			arraySort((nextSuite: SuiteResult) => (suite: SuiteResult) =>
				nextSuite.failed.length - suite.failed.length
			)(suites)
		)
	);
