import { foregroundGreen, foregroundRed } from "@vangware/ansi";
import { joinNewLine } from "../utils/joinNewLine";
import { stringify } from "../utils/stringify";

/**
 * Compares two primitive values.
 *
 * @template Wanted The wanted value type.
 * @param wanted Wanted value.
 */
export const comparePrimitives =
	<Wanted>(wanted: Wanted) =>
	/**
	 * @param received Received value.
	 */
	<Received>(received: Received) =>
		joinNewLine([
			`${foregroundRed("Received:")} ${stringify(received)}`,
			`${foregroundGreen("Wanted:")}   ${stringify(wanted)}`
		]);
