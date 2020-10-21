import {
	greenBackground,
	mix,
	redBackground,
	whiteText
} from "@vangware/forcli";

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
