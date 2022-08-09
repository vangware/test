import { underlined } from "@vangware/ansi";
import { TEST } from "./constants.js";
import { relativePath } from "./relativePath.js";
import { stringifyTest } from "./stringifyTest.js";
import { test } from "./test.js";
import type { TestsRecord } from "./types/TestsRecord.js";

/**
 * Run tests in given {@link TestsRecord} and return a string with the results.
 *
 * @category Output
 * @category Test
 * @example
 * ```typescript
 * runAndStringifyTests({
 * 	"file:///tests/example.test.ts": [
 * 		{
 * 			given: "🟢",
 * 			must: "🟩",
 * 			received: "🟩",
 * 			wanted: "🟩",
 * 		},
 * 	],
 * });
 * // "[TEST] file:///tests/example.test.ts
 * // [PASS] Given 🟢, must 🟩."
 * ```
 * @param testsRecord Object with paths and array of tests.
 * @returns Promise with a readable strings of the test results.
 */
export const runAndStringifyTests = (testsRecord: TestsRecord) =>
	Promise.all(
		Object.entries(testsRecord).map(([path, tests]) =>
			Promise.all(tests.map(test)).then(results => ({
				hasFails: results.some(
					({ differences }) => differences !== undefined,
				),
				lines: [
					`${TEST} ${underlined(relativePath(path))}`,
					...[...results]
						.sort((resultA, resultB) =>
							(resultA.differences !== undefined) ===
							(resultB.differences !== undefined)
								? 0
								: resultA.differences !== undefined
								? 1
								: -1,
						)
						.map(stringifyTest),
				],
			})),
		),
	).then(results =>
		Promise[
			results.some(({ hasFails }) => hasFails) ? "reject" : "resolve"
		](
			[...results]
				.sort((resultA, resultB) =>
					resultA.hasFails === resultB.hasFails
						? 0
						: resultA.hasFails
						? 1
						: -1,
				)
				.flatMap(({ lines }) => lines)
				.join("\n"),
		),
	);
