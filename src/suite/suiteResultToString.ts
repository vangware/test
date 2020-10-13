import { FAIL, PASS } from "../constants";
import { testResultToStringMap } from "../test/testResultToStringMap";
import { SuiteResult } from "../types/SuiteResult";
import { joinNewLine } from "../utils/joinNewLine";

/**
 * Takes a `SuiteResult` object and returns a stringified version of it.
 * @param suiteResult SuiteResult to generate the string from.
 */
export const suiteResultToString = ({ name, failed }: SuiteResult) =>
	`${failed.length > 0 ? FAIL : PASS} ${name}${
		failed.length > 0
			? `\n\n${joinNewLine(testResultToStringMap(failed))}`
			: ""
	}`;

export default suiteResultToString;
