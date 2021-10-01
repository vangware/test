import { compare } from "../compare/compare";
import type { Test } from "../types/Test";
import type { TestResult } from "../types/TestResult";
import { deepEqual } from "../utils/deepEqual";
import { promiseWrapMap } from "../utils/promiseWrapMap";

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
