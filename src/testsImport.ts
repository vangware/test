import { testImport } from "./testImport.js";
import type { ReadOnlyURLs } from "./types/ReadOnlyURLs.js";
import type { TestsRecord } from "./types/TestsRecord.js";

/**
 * Imports all the tests of the given array of paths and returns a {@link TestsRecord}.
 *
 * @category File System
 * @example
 * ```typescript
 * suiteImport([
 * 	"file:///example/test-1.js",
 * 	"file:///example/test-2.js",
 * ]);
 * // Promise<{
 * // 	"file:///example/test-1.js": [
 * // 		{ given: "example", must: "example", received: "value", wanted: "value" },
 * // 	},
 * // 	"file:///example/test-2.js": [
 * // 		{ given: "example", must: "example", received: "value", wanted: "value" },
 * // 	],
 * // }>
 * ```
 * @param paths Array of paths of tests.
 * @returns A {@link TestsRecord} object with the tests.
 */
export const testsImport = (paths: ReadOnlyURLs) =>
	Promise.all(paths.map(testImport)).then(
		importedTests =>
			Object.fromEntries(
				importedTests.map((test, index) => [paths[index], test]),
			) as TestsRecord,
	);
