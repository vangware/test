import { readdir } from "node:fs/promises";
import { relativePath } from "./relativePath.js";
import type { ReadOnlyURL } from "./types/ReadOnlyURL.js";
import type { ReadOnlyURLs } from "./types/ReadOnlyURLs.js";

/**
 * Recursively search for files in the given directory and filters them based on
 * given filterer function.
 *
 * @category File System
 * @example
 * ```typescript
 * getFiles("./tests/"); // ["./tests/vangware.test.ts"]
 * ```
 * @param directory Directory to get files from.
 * @returns Array of files in given `directory` that match `filterer`.
 */
export const getFilePaths = (directory: ReadOnlyURL): Promise<ReadOnlyURLs> =>
	readdir(directory, { withFileTypes: true })
		.then(direntArray =>
			Promise.all(
				direntArray.map(dirent =>
					dirent.isDirectory()
						? getFilePaths(new URL(`${dirent.name}/`, directory))
						: new URL(dirent.name, directory),
				),
			).then(paths => paths.flat()),
		)
		.catch(() => Promise.reject(`Can't read ${relativePath(directory)}`));
