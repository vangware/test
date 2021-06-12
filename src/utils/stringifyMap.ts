import type { ReadOnlyArray } from "@vangware/types";
import { stringify } from "./stringify";

/**
 * Applies `stringify` to every value in the given array.
 *
 * @category Common
 */
export const stringifyMap = <Source>(source: ReadOnlyArray<Source>) =>
	source.map(stringify);
