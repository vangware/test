import { isFunction } from "@vangware/utils";
import type { SuiteImport } from "../types/SuiteImport";

/**
 * Import a file that exports a `suite`.
 *
 * @param path File path to load from.
 */
export const suiteImport = (path: string) =>
	(import(path) as SuiteImport).then(({ default: suite }) =>
		isFunction(suite) ? suite(path) : suite
	);
