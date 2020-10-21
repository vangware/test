import { equal } from "@vangware/utils";
import { compare } from "../compare/compare";
import { Test } from "../types/Test";
import { TestResult } from "../types/TestResult";
import { promiseWrap } from "../utils/promiseWrap";

/**
 * Takes a `Test` object and returns a `TestResult` object.
 * @param options Test options object.
 */
export const test = <Value>({
	given,
	must,
	received,
	wanted
}: Test<Value>): Promise<TestResult> =>
	Promise.all([received, wanted].map(promiseWrap))
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
