import {
	backgroundGreen,
	backgroundRed,
	foregroundRed,
	foregroundWhite,
	mix
} from "@vangware/ansi";
import { comment } from "./utils/comment";

/** Fail message with colors. */
export const FAIL = mix([foregroundWhite, backgroundRed])("[FAIL]");

/** Pass message with colors. */
export const PASS = mix([foregroundWhite, backgroundGreen])("[PASS]");

/** Unwanted comment (`// Unwanted` in red text). */
export const UNWANTED_COMMENT = comment(foregroundRed)("Unwanted");
