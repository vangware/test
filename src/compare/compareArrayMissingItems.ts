import type { ReadOnlyArray } from "@vangware/types";
import { missingComment } from "../utils/missingComment";
import { stringifyMap } from "../utils/stringifyMap";

/**
 * Takes a source array and returns a string for missing items.
 *
 * @category Compare
 */
export const compareArrayMissingItems = <Item>(source: ReadOnlyArray<Item>) =>
	missingComment(stringifyMap(source).join(", "));
