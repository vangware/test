import { isTest } from "./isTest.js";
import type { ReadOnlyURL } from "./types/ReadOnlyURL.js";
import type { TestsImport } from "./types/TestsImport.js";

/**
 * Import a file that exports a `Test` or an array of `Test`.
 *
 * @category File System
 * @example
 * ```typescript
 * testImport(new URL("file:///example/test.js"));
 * // Promise<[
 * // 	{ given: "example", must: "example", received: "value", wanted: "value" },
 * // 	{ given: "example", must: "example", received: "value", wanted: "value" },
 * // ]>
 * ```
 * @param path Path to the test file.
 * @returns A promise with an array of `Test` and the path.
 */
export const testImport = (path: ReadOnlyURL) =>
	(import(path.href) as TestsImport).then(tests =>
		Object.values(tests)
			.map(importedTest =>
				(Array.isArray(importedTest)
					? importedTest
					: [importedTest]
				).filter(isTest),
			)
			.flat(),
	);
