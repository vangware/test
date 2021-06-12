import type { ReadOnlyArray } from "@vangware/types";
import { isSuiteResult } from "./isSuiteResult";
import { suiteImport } from "./suiteImport";

/**
 * Imports all the suites of the given array of paths.
 *
 * @category Suite
 */
export const suitesImport = (paths: ReadOnlyArray<string>) =>
	Promise.all(paths.map(suiteImport)).then(suites =>
		suites.filter(suite => isSuiteResult(suite))
	);
