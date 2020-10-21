import { arrayMap } from "@vangware/utils";
import { stringify } from "./stringify";

/**
 * Applies `stringify` to every value in the given array.
 */
export const stringifyMap = arrayMap(stringify);
