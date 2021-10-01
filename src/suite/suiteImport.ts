import type { SuiteImport } from "../types/SuiteImport";

/**
 * Import a file that exports a `suite`.
 *
 * @category Suite
 */
export const suiteImport = (path: string) =>
	(import(path) as SuiteImport).then(({ default: suite }) =>
		typeof suite === "function" ? suite(path) : suite,
	);
