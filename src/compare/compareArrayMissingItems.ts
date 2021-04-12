import { joinComma } from "../utils/joinComma";
import { missingComment } from "../utils/missingComment";
import { stringifyMap } from "../utils/stringifyMap";

/**
 * Takes a source array and returns a string for missing items.
 *
 * @template Item Type of the items in the arrays being compared.
 * @param source Source array of missing items.
 */
export const compareArrayMissingItems = <Item>(source: ReadonlyArray<Item>) =>
	missingComment(joinComma(stringifyMap(source)));
