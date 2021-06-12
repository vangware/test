import type { ReadOnlyArray } from "@vangware/types";

/**
 * Maps trough and array of strings and add indent to each item.
 *
 * @category Common
 */
export const indentMap = (lines: ReadOnlyArray<string>) =>
	lines.map(line => `\t${line}`);
