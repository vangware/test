import type { Dirent } from "fs";
import { resolve, sep } from "path";

/**
 * Takes a base directory and a dirent, and returns entire pathname.
 *
 * @category Internal
 */
export const direntToPath = (directory: string) => (dirent: Readonly<Dirent>) =>
	`${resolve(directory, dirent.name)}${dirent.isDirectory() ? sep : ""}`;
