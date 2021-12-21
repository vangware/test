import { fileURLToPath } from "node:url";
import type { SuiteImport } from "../types/SuiteImport.js";
import type { URLOrString } from "../types/URLOrString.js";

/**
 * Import a file that exports a `suite`.
 *
 * @category Suite
 */
export const suiteImport = (path: URLOrString) =>
	(
		import(
			typeof path === "string" ? path : fileURLToPath(path)
		) as SuiteImport
	).then(({ default: suite }) =>
		typeof suite === "function" ? suite(path) : suite,
	);
