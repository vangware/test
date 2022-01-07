import {
	backgroundGreen,
	backgroundRed,
	foregroundBlack,
	foregroundRed,
	mix,
} from "@vangware/ansi";
import { comment } from "./utils/comment.js";

/** Fail message with colors. */
export const FAIL = mix([foregroundBlack, backgroundRed])`[FAIL]`;

/** Pass message with colors. */
export const PASS = mix([foregroundBlack, backgroundGreen])`[PASS]`;

/** Unwanted comment (`// Unwanted` in red text). */
export const UNWANTED_COMMENT = comment(foregroundRed)`Unwanted`;
