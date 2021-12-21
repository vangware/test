import type { Predicate } from "@vangware/types";
import { stringifySuiteResults } from "../suite/stringifySuiteResults.js";
import { suitesImport } from "../suite/suitesImport.js";
import type { URLOrString } from "../types/URLOrString.js";
import { listFiles } from "./listFiles.js";

/**
 * Runs tests in given directory and log to the console.
 *
 * @category Internal
 */
export const run =
	(filterer: Predicate<URLOrString>) => (directory: URLOrString) =>
		listFiles(filterer)(directory)
			.then(suitesImport)
			.then(stringifySuiteResults)
			// eslint-disable-next-line no-console
			.then(console.log)
			// eslint-disable-next-line no-console
			.catch(console.error);
