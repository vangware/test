import {
	backgroundGreen,
	backgroundRed,
	foregroundRed,
	foregroundWhite,
	mix
} from "@vangware/ansi";
import { comment } from "./utils/comment";

/**
 * Comma character (to avoid repetition).
 */
export const COMMA = ",";

/**
 * Empty string.
 */
export const EMPTY = "";

/**
 * Indent for string output (used by object and array output).
 */
export const INDENT = "    ";

/**
 * Fail message with colors.
 */
export const FAIL = mix([foregroundWhite, backgroundRed])("[FAIL]");

/**
 * Pass message with colors.
 */
export const PASS = mix([foregroundWhite, backgroundGreen])("[PASS]");

/**
 * Unwanted comment (`// Unwanted` in red text).
 */
export const UNWANTED_COMMENT = comment(foregroundRed)("Unwanted")(undefined);
