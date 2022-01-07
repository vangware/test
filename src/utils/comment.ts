import type { Formatter } from "@vangware/ansi";
import { normalizeString } from "@vangware/ansi";

/**
 * Takes a title and a value and turns it into an inline comment.
 *
 * @category Common
 */
export const comment =
	(formatter: Formatter): Formatter =>
	(input, ...values) =>
		formatter(`// ${normalizeString(input, ...values)}`);
