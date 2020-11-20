import { equal } from "@vangware/utils";
import { compare } from "../compare/compare";
import type { Test } from "../types/Test";
import type { TestResult } from "../types/TestResult";
import { promiseWrapMap } from "../utils/promiseWrapMap";

/**
 * Takes a `Test` object and returns a `TestResult` object.
 *
 * @template Value Value being tested.
 * @param options Test options object.
 */
export const test = <Value>({
	given,
	must,
	received,
	wanted
}: Test<Value>): Promise<TestResult> =>
	Promise.all(promiseWrapMap([received, wanted]))
		.then(([receivedValue, wantedValue]) =>
			equal(receivedValue)(wantedValue)
				? { given, must }
				: Promise.reject(compare(wantedValue)(receivedValue))
		)
		.catch((error: "Unknown Error") => ({
			error,
			given,
			must
		}));
