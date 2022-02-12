/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Maybe } from "@vangware/types";
import deepDiff from "deep-diff";
import type { Differences } from "./types/Differences.js";
import type { Test } from "./types/Test.js";
import type { TestResult } from "./types/TestResult.js";

/**
 * Takes a {@link Test} object and returns a promise with a {@link TestResult}.
 *
 * @category Test
 * @example
 * ```typescript
 * test({
 * 	given: "🟢",
 * 	must: "🟩",
 * 	received: "🟩",
 * 	wanted: "🟩",
 * }); // Promise<{ given: "🟢", , must: "🟩" }>
 * test({
 * 	given: "🟢",
 * 	must: "🟩",
 * 	received: "❌",
 * 	wanted: "🟩",
 * }); // Promise<{ differences: [...], given: "🟢", , must: "🟩" }>
 * ```
 * @param test A {@link Test} object.
 * @returns A promise with a {@link TestResult} object.
 */
export const test = <Value>({ given, must, received, wanted }: Test<Value>) =>
	Promise.all([wanted, received])
		.then(
			([awaitedWanted, awaitedReceived]): Maybe<Differences<Value>> =>
				deepDiff
					.diff(awaitedWanted, awaitedReceived)
					?.filter(
						difference =>
							difference.kind !== "N" ||
							typeof difference.rhs !== "undefined",
					),
		)
		.catch(
			(error: unknown = "Unknown Error"): Differences<Value> => [
				{ error, kind: "X" },
			],
		)
		.then(
			differences =>
				({
					differences:
						differences?.length === 0 ? undefined : differences,
					given,
					must,
				} as TestResult<Value>),
		);
