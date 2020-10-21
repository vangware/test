import {
	isArray,
	isDate,
	isObject,
	isRegExp,
	ReadOnlyObject
} from "@vangware/utils";
import { compareArrays } from "./compareArrays";
import { compareObjects } from "./compareObjects";
import { comparePrimitives } from "./comparePrimitives";

/**
 * Compare two values and show the differences in different ways.
 * @param wanted Wanted value.
 */
export const compare = <Wanted>(wanted: ReadOnlyObject<Wanted>) =>
	/**
	 * @param received Received value.
	 */
	(received: ReadOnlyObject<Wanted>) =>
		isArray(wanted) && isArray(received)
			? compareArrays(wanted)(received)
			: !isDate(wanted) &&
			  !isDate(received) &&
			  !isRegExp(wanted) &&
			  !isRegExp(received) &&
			  isObject(wanted) &&
			  isObject(received)
			? compareObjects(wanted)(received)
			: comparePrimitives(wanted)(received);
