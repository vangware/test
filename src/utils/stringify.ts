import { isRegExp, isUndefined } from "@vangware/utils";

/**
 * Stringifies value reliably (using `JSON.stringify`).
 * @param source Source value to be stringified.
 */
export const stringify = <Source>(source: Source) =>
	isUndefined(source) || isRegExp(source)
		? `${source}`
		: JSON.stringify(source);
