import { FAIL, PASS } from "../constants";
import { testResultToStringMap } from "../test/testResultToStringMap";
import type { SuiteResult } from "../types/SuiteResult";

/**
 * Takes a `SuiteResult` object and returns a stringified version of it.
 *
 * @category Suite
 */
export const suiteResultToString = ({ name, failed }: SuiteResult) =>
	`${failed.length > 0 ? FAIL : PASS} ${name}${
		failed.length > 0
			? `\n\n${testResultToStringMap(failed).join("\n")}`
			: ""
	}`;
