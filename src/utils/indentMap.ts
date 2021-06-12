import type { ReadOnlyArray } from "@vangware/types";

/**
 * Maps trough and array of strings and add indent to each item.
 *
 * @category Common
 */
export const indentMap = (source: ReadOnlyArray<string>) =>
	source.map(item => `\t${item}`);
