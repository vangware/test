import type { ReadOnlyArray } from "@vangware/types";
import type { URLOrString } from "../types/URLOrString.js";
import { isSuiteResult } from "./isSuiteResult.js";
import { suiteImport } from "./suiteImport.js";

/**
 * Imports all the suites of the given array of paths.
 *
 * @category Suite
 */
export const suitesImport = (paths: ReadOnlyArray<URLOrString>) =>
	Promise.all(paths.map(suiteImport)).then(suites =>
		suites.filter(isSuiteResult),
	);
