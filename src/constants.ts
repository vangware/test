import {
	greenBackground,
	mix,
	redBackground,
	whiteText
} from "@vangware/forcli";

export const INDENT = "    ";
export const FAIL = mix([whiteText, redBackground])("[FAIL]");
export const PASS = mix([whiteText, greenBackground])("[PASS]");
