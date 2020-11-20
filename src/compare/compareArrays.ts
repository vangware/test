import { ArrayChange, diffArrays } from "diff";
import { arrayFlat1 } from "../utils/arrayFlat1";
import { indentMap } from "../utils/indentMap";
import { joinNewLine } from "../utils/joinNewLine";
import { lastAwareMap } from "../utils/lastAwareMap";
import { compareArrayMatchingItems } from "./compareArrayMatchingItems";
import { compareArrayMissingItems } from "./compareArrayMissingItems";
import { compareArrayUnwantedItems } from "./compareArrayUnwantedItems";

/**
 * Compare two arrays and displays the differences (unwanted, missing and
 * matching items).
 *
 * @template Wanted The wanted value type.
 * @param wanted Wanted array.
 */
export const compareArrays = <Wanted>(wanted: readonly Wanted[]) =>
	/**
	 * @param received Received array.
	 */
	(received: readonly Wanted[]) =>
		`Received: [\n${joinNewLine(
			indentMap(
				arrayFlat1(
					lastAwareMap(
						last => ({
							added,
							removed,
							value
						}: ArrayChange<Wanted>) =>
							added
								? compareArrayUnwantedItems(last)(value)
								: removed
								? compareArrayMissingItems(value)
								: compareArrayMatchingItems(last)(value)
					)(diffArrays([...wanted], [...received]))
				)
			)
		)}\n]`;
