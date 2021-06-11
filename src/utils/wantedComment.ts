import { foregroundRed } from "@vangware/ansi";
import { comment } from "./comment";

/**
 * Comment for wanted items.
 */
export const wantedComment = comment(foregroundRed)("Wanted");
