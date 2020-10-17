import {
	arrayMap,
	ReadOnlyObjectArray,
	UnguardedFilterer
} from "@vangware/utils";
import { readdir } from "fs/promises";
import { sep } from "path";
import { arrayFlat1 } from "../utils/arrayFlat1";
import { direntToPathMap } from "./direntToPathMap";

/**
 * Recursively search for files in the given directory.
 *
 * @param filterer Filter function to be run with every file path.
 */
export const listFiles = (filterer: UnguardedFilterer<string>) =>
	/**
	 * @param directory Directory to search in.
	 */
	(directory: string): Promise<ReadOnlyObjectArray<string>> =>
		readdir(directory, { withFileTypes: true }).then(files =>
			Promise.all(
				arrayMap((path: string) =>
					path.endsWith(sep)
						? listFiles(filterer)(path)
						: Promise.resolve(filterer(path) ? [path] : [])
				)(direntToPathMap(directory)(files))
			).then(arrayFlat1)
		);

export default listFiles;
