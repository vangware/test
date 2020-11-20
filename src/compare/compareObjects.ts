import {
	arrayFilterIn,
	arrayMap,
	Entry,
	equal,
	isUndefined,
	objectEntries
} from "@vangware/utils";
import { COMMA, EMPTY, INDENT, UNWANTED_COMMENT } from "../constants";
import { joinComma } from "../utils/joinComma";
import { joinNewLine } from "../utils/joinNewLine";
import { lastAwareMap } from "../utils/lastAwareMap";
import { missingComment } from "../utils/missingComment";
import { stringify } from "../utils/stringify";
import { wantedComment } from "../utils/wantedComment";

/**
 * Compare two objects and displays the differences (unwanted, missing and
 * matching items).
 *
 * @template Wanted The wanted value type.
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
				`${INDENT}${key}: ${stringify(value)}${last ? EMPTY : COMMA}${
					equal(wanted[key])(value)
						? EMPTY
						: ` ${
								isUndefined(wanted[key])
									? UNWANTED_COMMENT
									: wantedComment(stringify(wanted[key]))
						  }`
				}`
			)(objectEntries(received))
		)}${
			missingEntries.length > 0
				? `\n${INDENT}${missingComment(joinComma(missingEntries))}`
				: EMPTY
		}\n}`;
	};
