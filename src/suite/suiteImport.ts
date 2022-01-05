import type { SuiteImport } from "../types/SuiteImport.js";
import type { URLOrString } from "../types/URLOrString.js";

/**
 * Import a file that exports a `suite`.
 *
 * @category Suite
 */
export const suiteImport = (path: URLOrString) =>
	(import(path as string) as SuiteImport).then(({ default: suite }) =>
		typeof suite === "function" ? suite(path) : suite,
	);
