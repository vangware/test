import { isPlainObject } from "../utils/isPlainObject.js";
import { compareArrays } from "./compareArrays.js";
import { compareObjects } from "./compareObjects.js";
import { comparePrimitives } from "./comparePrimitives.js";

/**
 * Compare two values and show the differences between them.
 *
 * @category Compare
 */
export const compare =
	<Wanted>(wanted: Wanted) =>
	(received: Wanted) =>
		Array.isArray(wanted) && Array.isArray(received)
			? compareArrays(wanted)(received)
			: isPlainObject(wanted) && isPlainObject(received)
			? compareObjects(wanted)(received)
			: comparePrimitives(wanted)(received);
