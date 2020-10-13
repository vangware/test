import { redText } from "@vangware/forcli";
import { INDENT } from "../constants";
import { lastAwareMap } from "../utils/lastAwareMap";
import { stringify } from "../utils/stringify";

/**
 * Takes a boolean to know if the paren is in it's last item, and a source array
 * and returns a string of unwanted elements.
 * @param lastParent Last item of the parent.
 */
export const compareArrayUnwantedItems = (lastParent: boolean) =>
	lastAwareMap(last => item =>
		`${INDENT}${stringify(item)}${last && lastParent ? " " : ","} ${redText(
			"// Unwanted"
		)}`
	);

export default compareArrayUnwantedItems;
