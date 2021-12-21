import { compare } from "../compare/compare.js";
import type { Test } from "../types/Test.js";
import type { TestResult } from "../types/TestResult.js";
import { deepEqual } from "../utils/deepEqual.js";
import { promiseWrapMap } from "../utils/promiseWrapMap.js";

/**
 * Takes a `Test` object and returns a `TestResult` object.
 *
 * @category Test
 */
export const test = <Value>({
	given,
	must,
	received,
	wanted,
}: Test<Value>): Promise<TestResult> =>
	Promise.all(promiseWrapMap([wanted, received]))
		.then(([wantedValue, receivedValue]) =>
			deepEqual(receivedValue)(wantedValue)
				? { given, must }
				: Promise.reject(compare(wantedValue)(receivedValue)),
		)
		.catch((error: "Unknown Error") => ({
			error,
			given,
			must,
		}));
