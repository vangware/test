import type { ReadOnlyArray } from "@vangware/types";
import { missingComment } from "../utils/missingComment.js";
import { stringifyMap } from "../utils/stringifyMap.js";

/**
 * Takes an array and returns a string for missing items.
 *
 * @category Compare
 */
export const stringifyMissingItems = <Item>(
	missingItems: ReadOnlyArray<Item>,
) => missingComment(stringifyMap(missingItems).join(", "));
