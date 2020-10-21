import { greenText, redText } from "@vangware/forcli";
import { joinNewLine } from "../utils/joinNewLine";
import { stringify } from "../utils/stringify";

/**
 * Compares two primitive values.
 * @param wanted Wanted value.
 */
export const comparePrimitives = <Wanted>(wanted: Wanted) =>
	/**
	 * @param received Received value.
	 */
	(received: unknown) =>
		joinNewLine([
			`${redText("Received:")} ${stringify(received)}`,
			`${greenText("Wanted:")}   ${stringify(wanted)}`
		]);
