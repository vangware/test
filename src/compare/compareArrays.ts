import type { ReadOnlyArray } from "@vangware/types";
import type { ArrayChange } from "diff";
import { diffArrays } from "diff";
import { indentMap } from "../utils/indentMap";
import { lastAwareMap } from "../utils/lastAwareMap";
import { compareArrayMatchingItems } from "./compareArrayMatchingItems";
import { compareArrayMissingItems } from "./compareArrayMissingItems";
import { compareArrayUnwantedItems } from "./compareArrayUnwantedItems";

/**
 * Compare two arrays and displays the differences (unwanted, missing and
 * matching items).
 *
 * @category Compare
 */
export const compareArrays =
	<Wanted>(wanted: ReadOnlyArray<Wanted>) =>
	(received: ReadOnlyArray<Wanted>) =>
		`Received: [\n${indentMap(
			lastAwareMap<ArrayChange<Wanted>, ReadOnlyArray<string> | string>(
				last =>
					({ added = false, removed = false, value }) =>
						(added
							? compareArrayUnwantedItems(last)
							: removed
							? compareArrayMissingItems
							: compareArrayMatchingItems(last))(value)
			)(diffArrays([...wanted], [...received])).flat()
		).join("\n")}\n]`;
