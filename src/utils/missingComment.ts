import { foregroundGray } from "@vangware/ansi";
import { comment } from "./comment";

/**
 * Comment for missing items.
 *
 * @category Common
 */
export const missingComment = (value: string) =>
	comment(foregroundGray)(`Missing: ${value}`);
