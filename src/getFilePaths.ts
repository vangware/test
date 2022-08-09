import { readdir, stat } from "node:fs/promises";
import { relativePath } from "./relativePath.js";
import type { ReadOnlyURL } from "./types/ReadOnlyURL.js";
import type { ReadOnlyURLs } from "./types/ReadOnlyURLs.js";

/**
 * Recursively search for files in the given directory and filters them based on
 * given filterer function. If a file path is passed, it returns an array
 * containing only that path.
 *
 * @category File System
 * @example
 * ```typescript
 * getFiles("./tests/"); // ["./tests/vangware.test.ts"]
 * ```
 * @param fileOrDirectory Directory to get files from.
 * @returns Array of files in given `directory` that match `filterer`.
 */
export const getFilePaths = (
	fileOrDirectory: ReadOnlyURL,
): Promise<ReadOnlyURLs> =>
	stat(fileOrDirectory).then(stats =>
		stats.isDirectory()
			? readdir(fileOrDirectory, { withFileTypes: true })
					.then(direntArray =>
						Promise.all(
							direntArray.map(dirent =>
								dirent.isDirectory()
									? getFilePaths(
											new URL(
												`${dirent.name}/`,
												fileOrDirectory,
											),
									  )
									: new URL(dirent.name, fileOrDirectory),
							),
						).then(paths => paths.flat()),
					)
					.catch(() =>
						Promise.reject(
							`Can't read ${relativePath(fileOrDirectory)}`,
						),
					)
			: Promise.resolve([fileOrDirectory]),
	);
