import { isUndefined } from "@vangware/utils";
import type { ArrayChange } from "diff";
import { diffArrays } from "diff";
import { arrayFlat1 } from "../utils/arrayFlat1";
import { indentMap } from "../utils/indentMap";
import { joinNewLine } from "../utils/joinNewLine";
import { lastAwareMap } from "../utils/lastAwareMap";
import { compareArrayMatchingItems } from "./compareArrayMatchingItems";
import { compareArrayMissingItems } from "./compareArrayMissingItems";
import { compareArrayUnwantedItems } from "./compareArrayUnwantedItems";

/**
 * Compare two arrays and displays the differences (unwanted, missing and
 * matching items).
 *
 * @template Wanted The wanted value type.
 * @param wanted Wanted array.
 */
export const compareArrays =
	<Wanted>(wanted: ReadonlyArray<Wanted>) =>
	/**
	 * @param received Received array.
	 */
	(received: ReadonlyArray<Wanted>) =>
		`Received: [\n${joinNewLine(
			indentMap(
				arrayFlat1(
					lastAwareMap(
						// ArrayChange type is not readonly -_-
						last =>
							// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
							({ added, removed, value }: ArrayChange<Wanted>) =>
								!isUndefined(added) && added
									? compareArrayUnwantedItems(last)(value)
									: !isUndefined(removed) && removed
									? compareArrayMissingItems(value)
									: compareArrayMatchingItems(last)(value)
					)(diffArrays([...wanted], [...received]))
				)
			)
		)}\n]`;
