import { arrayMap } from "@vangware/utils";
import { INDENT } from "../constants";

/**
 * Maps trough and array of strings and add indent to each item.
 */
export const indentMap = arrayMap((item: string) => `${INDENT}${item}`);
