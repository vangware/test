import type { ReadOnlyArray } from "@vangware/types";
import type { Dirent } from "fs";
import { direntToPath } from "./direntToPath";

/**
 * Maps an array of dirent using `direntToPath`.
 *
 * @category Internal
 */
export const direntToPathMap =
	(directory: string) => (direntArray: ReadOnlyArray<Readonly<Dirent>>) =>
		direntArray.map(direntToPath(directory));
