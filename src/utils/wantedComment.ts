import { foregroundRed } from "@vangware/ansi";
import { comment } from "./comment";

/**
 * Comment for wanted items.
 *
 * @category Common
 */
export const wantedComment = (value: string) =>
	comment(foregroundRed)(`Wanted: ${value}`);
