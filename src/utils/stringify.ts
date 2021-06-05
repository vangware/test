import { isRegExp, isUndefined } from "@vangware/utils";

/**
 * Stringifies value reliably (using `JSON.stringify`).
 *
 * @template Source Type of the Source value to be transformed into string.
 * @param source Source value to be stringified.
 */
export const stringify = <Source>(source: Source) =>
	isUndefined(source)
		? `${source as unknown as string}`
		: isRegExp(source)
		? source.toString()
		: JSON.stringify(source);
