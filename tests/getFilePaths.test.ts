import { resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { getFilePaths } from "../src/getFilePaths.js";
import type { ReadOnlyURLs } from "../src/index.js";
import { relativePath } from "../src/index.js";
import type { Tests } from "../src/types/Tests.js";

const currentDirectoryURLResolve = (...paths: ReadonlyArray<string>) =>
	pathToFileURL(resolve(fileURLToPath(import.meta.url), ...paths));

export default [
	{
		given: "a valid directory path",
		must: "return an array with the files on it",
		received: getFilePaths(currentDirectoryURLResolve("../directory")),
		wanted: [
			currentDirectoryURLResolve("../directory/inDirectory.test.ts"),
		],
	},
	{
		given: "a valid file path",
		must: "return an array with that file on it",
		received: getFilePaths(
			currentDirectoryURLResolve("../directory/inDirectory.test.ts"),
		),
		wanted: [
			currentDirectoryURLResolve("../directory/inDirectory.test.ts"),
		],
	},
	{
		given: "an invalid directory path",
		must: "reject the promise",
		received: getFilePaths(currentDirectoryURLResolve("../nope")).catch(
			(error: string) => error,
		),
		wanted: `Can't read ${relativePath(
			currentDirectoryURLResolve("../nope"),
		)}`,
	},
] as Tests<ReadOnlyURLs | string>;
