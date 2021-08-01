import type { ReadOnlyRecord } from "@vangware/types";

/**
 * Check if given `input` is a plain object or not.
 *
 * @category Common
 */
export const isPlainObject = <Actual>(
	input: Actual | ReadOnlyRecord
): input is ReadOnlyRecord =>
	typeof input === "object" &&
	"constructor" in input &&
	input.constructor === Object;
