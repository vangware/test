import { grayText, redText } from "@vangware/forcli";
import {
	arrayFilterIn,
	arrayMap,
	Entry,
	equal,
	isUndefined,
	objectEntries
} from "@vangware/utils";
import { INDENT } from "../constants";
import { joinComma } from "../utils/joinComma";
import { joinNewLine } from "../utils/joinNewLine";
import { lastAwareMap } from "../utils/lastAwareMap";
import { stringify } from "../utils/stringify";

/**
 * Compare two objects and displays the differences (unwanted, missing and
 * matching items).
 * @param wanted Wanted object.
 */
export const compareObjects = <Wanted extends Record<string, unknown>>(
	wanted: Wanted
) =>
	/**
	 * @param received Received object.
	 */
	(received: Wanted) => {
		const missingEntries = arrayMap(([key]: Entry<Wanted>) => `"${key}"`)(
			arrayFilterIn(([key]: Entry<Wanted>) => isUndefined(received[key]))(
				objectEntries(wanted)
			)
		);

		return `Received: {\n${joinNewLine(
			lastAwareMap(last => ([key, value]: Entry<Wanted>) =>
				`${INDENT}${key}: ${value}${last ? " " : ","}${
					equal(wanted[key])(value)
						? ""
						: redText(
								isUndefined(wanted[key])
									? " // Unwanted"
									: ` // Wanted: ${stringify(wanted[key])}`
						  )
				}`
			)(objectEntries(received))
		)}${
			missingEntries.length > 0
				? grayText(
						`\n${INDENT}// Missing: ${joinComma(missingEntries)}`
				  )
				: ""
		}\n}`;
	};
