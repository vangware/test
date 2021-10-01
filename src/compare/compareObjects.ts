import type { EntriesOf, EntryOf } from "@vangware/types";
import { UNWANTED_COMMENT } from "../constants";
import { deepEqual } from "../utils/deepEqual";
import { lastAwareMap } from "../utils/lastAwareMap";
import { missingComment } from "../utils/missingComment";
import { stringify } from "../utils/stringify";
import { wantedComment } from "../utils/wantedComment";

/**
 * Compare two objects and displays the differences (unwanted, missing and
 * matching items).
 *
 * @category Compare
 */
export const compareObjects =
	<Wanted extends Record<string, unknown>>(wanted: Wanted) =>
	(received: Wanted) => {
		const missingEntries = Object.entries(wanted)
			.filter(([key]) => received[key] === undefined)
			.map(([key]) => `"${key}"`);

		return `Received:\t{\n${lastAwareMap(
			last =>
				([key, value]: EntryOf<Wanted>) =>
					`\t${key}: ${stringify(value)}${last ? "" : ","}${
						deepEqual(wanted[key])(value)
							? ""
							: ` ${
									wanted[key] === undefined
										? UNWANTED_COMMENT
										: wantedComment(stringify(wanted[key]))
							  }`
					}`,
		)(Object.entries(received) as unknown as EntriesOf<Wanted>).join(
			"\n",
		)}${
			missingEntries.length > 0
				? `\n\t${missingComment(missingEntries.join(", "))}`
				: ""
		}\n}`;
	};
