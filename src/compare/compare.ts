import { isPlainObject } from "../utils/isPlainObject";
import { compareArrays } from "./compareArrays";
import { compareObjects } from "./compareObjects";
import { comparePrimitives } from "./comparePrimitives";

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
