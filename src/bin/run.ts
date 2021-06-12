import { suiteResultToStringMap } from "../suite/suiteResultToStringMap";
import { suitesImport } from "../suite/suitesImport";
import { listFiles } from "./listFiles";

/**
 * Runs tests in given directory and log to the console.
 *
 * @category Internal
 */
export const run =
	(filterer: (path: string) => boolean) => (directory: string) =>
		listFiles(filterer)(directory)
			.then(suitesImport)
			.then(suiteResultToStringMap)
			.then(console.log)
			.catch(console.error);
