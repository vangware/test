import type { ReadOnlyArray } from "@vangware/types";
import { lastAwareMap } from "../utils/lastAwareMap.js";
import { stringifyMap } from "../utils/stringifyMap.js";

/**
 * Takes a boolean to know if this is the last item, and an array and
 * returns a string for matching items.
 *
 * @category Compare
 */
export const stringifyMatchingItems =
	(lastParent: boolean) =>
	<Item>(matchingItems: ReadOnlyArray<Item>) =>
		lastAwareMap(
			last => (item: string) => `${item}${last && lastParent ? "" : ","}`,
		)(stringifyMap(matchingItems));
