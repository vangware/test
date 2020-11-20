import { COMMA, EMPTY } from "../constants";
import { lastAwareMap } from "../utils/lastAwareMap";
import { stringifyMap } from "../utils/stringifyMap";

/**
 * Takes a boolean to know if this is the last item, and a source array and
 * returns a string for matching items.
 *
 * @param last Is the last element on the array.
 */
export const compareArrayMatchingItems = (lastParent: boolean) =>
	/**
	 * @param source Source array to be shown.
	 */
	<Item>(source: readonly Item[]) =>
		lastAwareMap(last => (item: string) =>
			`${item}${last && lastParent ? EMPTY : COMMA}`
		)(stringifyMap(source));
