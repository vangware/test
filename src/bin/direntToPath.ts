import type { Dirent } from "fs";
import { resolve, sep } from "path";
import { EMPTY } from "../constants";

/**
 * Takes a base directory and a dirent, and returns entire pathname.
 *
 * @param directory Base directory.
 * @returns Curried function with `directory` in context.
 */
export const direntToPath =
	(directory: string) =>
	/**
	 * @param dirent File dirent.
	 */
	(dirent: Readonly<Dirent>) =>
		`${resolve(directory, dirent.name)}${
			dirent.isDirectory() ? sep : EMPTY
		}`;
