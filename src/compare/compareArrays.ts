import type { ReadOnlyObject, ReadOnlyObjectArray } from "@vangware/utils";
import { ArrayChange, diffArrays } from "diff";
import { joinNewLine } from "../utils/joinNewLine";
import { lastAwareMap } from "../utils/lastAwareMap";
import { compareArrayMatchingItems } from "./compareArrayMatchingItems";
import { compareArrayMissingItems } from "./compareArrayMissingItems";
import { compareArrayUnwantedItems } from "./compareArrayUnwantedItems";

/**
 * Compare two arrays and displays the differences (unwanted, missing and
 * matching items).
 * @param wanted Wanted array.
 */
export const compareArrays = <Wanted>(wanted: ReadOnlyObjectArray<Wanted>) =>
	/**
	 * @param received Received array.
	 */
	(received: ReadOnlyObjectArray<Wanted>) =>
		`Received: [\n${joinNewLine(
			lastAwareMap(
				last => ({
					added,
					removed,
					value
				}: ArrayChange<ReadOnlyObject<Wanted>>) =>
					added
						? compareArrayUnwantedItems(last)(value)
						: removed
						? compareArrayMissingItems(value)
						: compareArrayMatchingItems(last)(value)
			)(diffArrays([...wanted], [...received])).flat()
		)}\n]`;
