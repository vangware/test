import {
	backgroundGreen,
	backgroundRed,
	backgroundWhite,
	foregroundBlack,
	mix,
} from "@vangware/ansi";

/**
 * Fail message with colors.
 *
 * @category Output
 */
export const FAIL = mix([foregroundBlack, backgroundRed])`[FAIL]`;

/**
 * Test message to be shown next to the test path.
 *
 * @category Output
 */
export const TEST = mix([foregroundBlack, backgroundWhite])`[TEST]`;

/**
 * Pass message with colors.
 *
 * @category Output
 */
export const PASS = mix([foregroundBlack, backgroundGreen])`[PASS]`;
