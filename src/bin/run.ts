import { UnguardedFilterer } from "@vangware/utils";
import { suiteResultToStringMap } from "../suite/suiteResultToStringMap";
import { suitesImport } from "../suite/suitesImport";
import { listFiles } from "./listFiles";

/**
 * Runs tests in given directory and log to the console.
 * @param filterer Filter function to be run with every file path.
 */
export const run = (filterer: UnguardedFilterer<string>) =>
	/**
	 * @param directory Directory to search in.
	 */
	(directory: string) =>
		listFiles(filterer)(directory)
			.then(suitesImport)
			.then(suiteResultToStringMap)
			.finally(console.log);
