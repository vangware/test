import { fileURLToPath } from "node:url";
import type { URLOrString } from "../types/URLOrString.js";

/**
 * Checks if given path is a test file (ends with .test.ext).
 *
 * @category Internal
 */
export const isTestFile = (file: URLOrString) =>
	/\.test\.\w+$/gu.test(
		typeof file === "string" ? file : fileURLToPath(file),
	);
