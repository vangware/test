import { foregroundGray } from "@vangware/ansi";
import { comment } from "./comment";

/**
 * Comment for missing items.
 */
export const missingComment = comment(foregroundGray)("Missing");
