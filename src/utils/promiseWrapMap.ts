import type { ReadOnlyArray } from "@vangware/types";
import type { MaybePromise } from "../types/MaybePromise";
import { promiseWrap } from "./promiseWrap";

/**
 * Maps using `promiseWrap`.
 *
 * @category Common
 */
export const promiseWrapMap = <Value>(
	maybePromises: ReadOnlyArray<MaybePromise<Value>>
) => maybePromises.map(promiseWrap);
