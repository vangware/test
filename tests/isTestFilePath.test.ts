import { isTestFilePath } from "../src/isTestFilePath.js";
import type { Tests } from "../src/types/Tests.js";

export default [
	{
		given: "a valid test file path",
		must: "return true",
		received: isTestFilePath(new URL("file:///tests/vangware.test.ts")),
		wanted: true,
	},
	{
		given: "an invalid test file path",
		must: "return false",
		received: isTestFilePath(new URL("file:///tests/vangware.ts")),
		wanted: false,
	},
] as Tests<boolean>;
