/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Maybe } from "@vangware/types";
import deepDiff from "deep-diff";
import type { Difference } from "./types/Difference.js";
import type { Test } from "./types/Test.js";
import type { TestResult } from "./types/TestResult.js";

/**
 * Takes a `Test` object and returns a promise with a `TestResult`.
 *
 * @category Test
 * @example
 * ```typescript
 * test({
 * 	given: "🟢",
 * 	must: "🟩",
 * 	received: () => "🟩",
 * 	wanted: () => "🟩",
 * }); // Promise<{ given: "🟢", , must: "🟩" }>
 * test({
 * 	given: "🟢",
 * 	must: "🟩",
 * 	received: () => "❌",
 * 	wanted: () => "🟩",
 * }); // Promise<{ differences: [...], given: "🟢", , must: "🟩" }>
 * ```
 * @param test A `Test` object.
 * @returns A promise with a `TestResult` object.
 */
export const test = async <Value>({
	given,
	must,
	received,
	wanted,
}: Test<Value>) => {
	// eslint-disable-next-line @typescript-eslint/init-declarations, functional/no-let
	let differences: Maybe<ReadonlyArray<Difference<Awaited<Value>>>>;

	// eslint-disable-next-line functional/no-try-statements
	try {
		const awaitedWanted = await wanted();
		const awaitedReceived = await received();

		differences = deepDiff
			.diff(awaitedWanted, awaitedReceived)
			?.filter(
				difference =>
					difference.kind !== "N" ||
					typeof difference.rhs !== "undefined",
			);
	} catch (error: unknown) {
		differences = [
			{ error: error ?? new Error("Unknown Error"), kind: "X" },
		];
	}

	return {
		differences: differences?.length === 0 ? undefined : differences,
		given,
		must,
	} as TestResult<Value>;
};
