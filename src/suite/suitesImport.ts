import { arrayFilterIn, arrayMap } from "@vangware/utils";
import { isSuiteResult } from "./isSuiteResult";
import { suiteImport } from "./suiteImport";

/**
 * Imports all the suites of the given array of paths.
 *
 * @param paths Array of file paths.
 */
export const suitesImport = (paths: readonly string[]) =>
	Promise.all(arrayMap(suiteImport)(paths)).then(
		arrayFilterIn(isSuiteResult)
	);
