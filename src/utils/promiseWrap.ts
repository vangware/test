import { isPromise, ReadOnlyObject } from "@vangware/utils";
import { ValueOrPromise } from "../types/ValueOrPromise";

/**
 * Given a value that could be either a promise or a value, return the value
 * wrapped in a promise.
 * @param valueOrPromise Value or Promise value.
 * @returns Promise of that value.
 */
export const promiseWrap = <OutputType>(
	valueOrPromise: ValueOrPromise<OutputType>
) =>
	(isPromise(valueOrPromise)
		? valueOrPromise
		: Promise.resolve(valueOrPromise)) as Promise<
		ReadOnlyObject<OutputType>
	>;
