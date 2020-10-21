import { arrayMap } from "@vangware/utils";
import { direntToPath } from "./direntToPath";

/**
 * Maps an array of dirent using `direntToPath`.
 * @param directory Base directory.
 */
export const direntToPathMap = (directory: string) =>
	arrayMap(direntToPath(directory));
