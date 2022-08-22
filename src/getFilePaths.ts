import { readdir, stat } from "node:fs/promises";
import type { ReadOnlyURL } from "./types/ReadOnlyURL.js";

/**
 * Recursively search for files in the given directory and yields every file. If
 * a file path is passed initially, that file is shielded directly.
 *
 * @category File System
 * @example
 * ```typescript
 * getFiles("./tests/"); // ["./tests/vangware.test.ts"]
 * ```
 * @param fileOrDirectory Directory to get files from.
 * @yields Files recursively found in the given directory.
 */
export const getFilePaths = async function* (
	fileOrDirectory: ReadOnlyURL,
): AsyncGenerator<ReadOnlyURL, void, unknown> {
	// eslint-disable-next-line functional/no-conditional-statement
	if ((await stat(fileOrDirectory)).isDirectory()) {
		// eslint-disable-next-line functional/no-loop-statement
		for (const dirent of await readdir(fileOrDirectory, {
			withFileTypes: true,
		})) {
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			dirent.isDirectory()
				? yield* getFilePaths(
						new URL(`${dirent.name}/`, fileOrDirectory),
				  )
				: yield new URL(dirent.name, fileOrDirectory);
		}
	} else {
		yield fileOrDirectory;
	}
};
