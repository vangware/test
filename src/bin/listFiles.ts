import type { Predicate, ReadOnlyArray } from "@vangware/types";
import { readdir } from "node:fs/promises";
import { sep } from "node:path";
import type { URLOrString } from "../types/URLOrString.js";
import { direntToPathMap } from "./direntToPathMap.js";

/**
 * Recursively search for files in the given directory.
 *
 * @category Internal
 */
export const listFiles =
	(filterer: Predicate<URLOrString>) =>
	(directory: URLOrString): Promise<ReadOnlyArray<URLOrString>> =>
		readdir(directory, { withFileTypes: true }).then(files =>
			Promise.all(
				direntToPathMap(directory)(files).map(url =>
					url.pathname.endsWith(sep)
						? listFiles(filterer)(url)
						: Promise.resolve(filterer(url) ? [url] : []),
				),
			).then(paths => paths.flat()),
		);
