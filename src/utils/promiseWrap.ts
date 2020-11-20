import type { MaybePromise } from "../types/MaybePromise";

/**
 * Given a value that could be either a promise or a value, return the value
 * wrapped in a promise.
 *
 * @param maybePromise Value or Promise value.
 * @returns Promise of that value.
 */
export const promiseWrap = <Value>(maybePromise: MaybePromise<Value>) =>
	Promise.resolve(maybePromise);
