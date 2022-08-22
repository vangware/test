import { pathToFileURL } from "node:url";
import { relativePath } from "../src/relativePath.js";
import type { Tests } from "../src/types/Tests.js";

const cwd = pathToFileURL(process.cwd());
const filename = "vangware.test.ts";

export default [
	{
		given: "a relative path to CWD",
		must: "return path without CWD",
		received: () => relativePath(new URL(`${cwd.toString()}/${filename}`)),
		wanted: () => `./${filename}`,
	},
	{
		given: "a absolute path",
		must: "return full path",
		received: () => relativePath(new URL(`file:///${filename}`)),
		wanted: () => `file:///${filename}`,
	},
] as Tests<string>;
