import { UNWANTED_COMMENT } from "../constants.js";
import { lastAwareMap } from "../utils/lastAwareMap.js";
import { stringify } from "../utils/stringify.js";

/**
 * Takes a boolean to know if the paren is in it's last item, and an array
 * and returns a string of unwanted elements.
 *
 * @category Compare
 */
export const stringifyUnwantedItems = (lastParent: boolean) =>
	lastAwareMap(
		last => item =>
			`${stringify(item)}${
				last && lastParent ? " " : ","
			} ${UNWANTED_COMMENT}`,
	);
