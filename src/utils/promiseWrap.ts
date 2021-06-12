import type { MaybePromise } from "../types/MaybePromise";

/**
 * Given a value that could be either a promise or a value, return the value
 * wrapped in a promise.
 *
 * @category Common
 */
export const promiseWrap = <Value>(maybePromise: MaybePromise<Value>) =>
	Promise.resolve(maybePromise);
