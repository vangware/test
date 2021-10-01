import type { ReadOnlyArray } from "@vangware/types";
import { readdir } from "fs/promises";
import { sep } from "path";
import { direntToPathMap } from "./direntToPathMap";

/**
 * Recursively search for files in the given directory.
 *
 * @category Internal
 */
export const listFiles =
	(filterer: (path: string) => boolean) =>
	(directory: string): Promise<ReadOnlyArray<string>> =>
		readdir(directory, { withFileTypes: true }).then(files =>
			Promise.all(
				direntToPathMap(directory)(files).map((path: string) =>
					path.endsWith(sep)
						? listFiles(filterer)(path)
						: Promise.resolve(filterer(path) ? [path] : []),
				),
			).then(paths => paths.flat()),
		);
