import type { Dirent } from "node:fs";
import type { URLOrString } from "../types/URLOrString.js";

/**
 * Takes a base directory and a dirent, and returns entire pathname.
 *
 * @category Internal
 */
export const direntToPath =
	(directory: URLOrString) => (dirent: Readonly<Dirent>) =>
		new URL(`${dirent.name}${dirent.isDirectory() ? "/" : ""}`, directory);
