import type { ReadOnlyArray } from "@vangware/types";
import type { MaybePromise } from "../types/MaybePromise";
import { promiseWrap } from "./promiseWrap";

/**
 * Maps using `promiseWrap`.
 *
 * @category Common
 */
export const promiseWrapMap = <Value>(
	source: ReadOnlyArray<MaybePromise<Value>>
) => source.map(promiseWrap);
