import type { ReadOnlyArray } from "@vangware/types";
import type { Dirent } from "node:fs";
import type { URLOrString } from "../types/URLOrString.js";
import { direntToPath } from "./direntToPath.js";

/**
 * Maps an array of dirent using `direntToPath`.
 *
 * @category Internal
 */
export const direntToPathMap =
	(directory: URLOrString) =>
	(direntArray: ReadOnlyArray<Readonly<Dirent>>) =>
		direntArray.map(direntToPath(directory));
