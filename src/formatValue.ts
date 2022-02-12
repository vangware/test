import { formatValueDictionary } from "./formatValueDictionary.js";

/**
 * Colorizes and formats a value based on its type.
 *
 * @category Output
 * @example
 * ```typescript
 * formatValue(1); // "1" (with colors)
 * formatValue(BigInt(1)); // "1n" (with colors)
 * formatValue([]); // "Array([])" (with colors)
 * formatValue({}); // "Object({})" (with colors)
 * ```
 * @param value Value to colorize.
 * @returns Colorized value as a string.
 */
export const formatValue = (value: unknown) =>
	formatValueDictionary[typeof value](value);
