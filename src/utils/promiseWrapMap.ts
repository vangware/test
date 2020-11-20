import { arrayMap } from "@vangware/utils";
import { promiseWrap } from "./promiseWrap";

/**
 * Maps using `promiseWrap`.
 */
export const promiseWrapMap = arrayMap(promiseWrap);
