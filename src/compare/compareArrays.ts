import type { ReadOnlyArray } from "@vangware/types";
import type { ArrayChange } from "diff";
import { diffArrays } from "diff";
import { indentMap } from "../utils/indentMap";
import { lastAwareMap } from "../utils/lastAwareMap";
import { stringifyMatchingItems } from "./stringifyMatchingItems";
import { stringifyMissingItems } from "./stringifyMissingItems";
import { stringifyUnwantedItems } from "./stringifyUnwantedItems";

/**
 * Compare two arrays and displays the differences (unwanted, missing and
 * matching items).
 *
 * @category Compare
 */
export const compareArrays =
	<Wanted>(wanted: ReadOnlyArray<Wanted>) =>
	(received: ReadOnlyArray<Wanted>) =>
		`Received:\t[\n${indentMap(
			lastAwareMap<ArrayChange<Wanted>, ReadOnlyArray<string> | string>(
				last =>
					({ added = false, removed = false, value }) =>
						(added
							? stringifyUnwantedItems(last)
							: removed
							? stringifyMissingItems
							: stringifyMatchingItems(last))(value),
			)(diffArrays([...wanted], [...received])).flat(),
		).join("\n")}\n]`;
