import { arrayMap, ReadOnlyObjectArray } from "@vangware/utils";
import { INDENT } from "../constants";
import { stringifyMap } from "../utils/stringifyMap";

/**
 * Takes a boolean to know if this is the last item, and a source array and
 * returns a string for matching items.
 * @param last Is the last element on the array.
 */
export const compareArrayMatchingItems = (last: boolean) =>
	/**
	 * @param source Source array to be shown.
	 */
	<Item>(source: ReadOnlyObjectArray<Item>) =>
		arrayMap((item: string) => `${INDENT}${item}${last ? "" : ","}`)(
			stringifyMap(source)
		);

export default compareArrayMatchingItems;
