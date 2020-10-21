import { grayText } from "@vangware/forcli";
import { ReadOnlyObjectArray } from "@vangware/utils";
import { INDENT } from "../constants";
import { joinComma } from "../utils/joinComma";
import { stringifyMap } from "../utils/stringifyMap";

/**
 * Takes a source array and returns a string for missing items.
 * @param source Source array of missing items.
 */
export const compareArrayMissingItems = <Item>(
	source: ReadOnlyObjectArray<Item>
) => grayText(`${INDENT}// Missing: ${joinComma(stringifyMap(source))}`);
