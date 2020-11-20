import {
	greenBackground,
	mix,
	redBackground,
	redText,
	whiteText
} from "@vangware/forcli";
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
export const FAIL = mix([whiteText, redBackground])("[FAIL]");

/**
 * Pass message with colors.
 */
export const PASS = mix([whiteText, greenBackground])("[PASS]");

/**
 * Unwanted comment (`// Unwanted` in red text).
 */
export const UNWANTED_COMMENT = comment(redText)("Unwanted")(undefined);
