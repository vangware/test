import { foregroundGreen, foregroundRed } from "@vangware/ansi";
import { stringify } from "../utils/stringify";

/**
 * Compares two primitive values.
 *
 * @category Compare
 */
export const comparePrimitives =
	<Wanted>(wanted: Wanted) =>
	<Received>(received: Received) =>
		[
			`${foregroundRed("Received:")} ${stringify(received)}`,
			`${foregroundGreen("Wanted:")}   ${stringify(wanted)}`
		].join("\n");
