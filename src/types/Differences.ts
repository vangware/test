import type { ReadOnlyArray } from "@vangware/types";
import type { Difference } from "./Difference.js";

/**
 * Array of {@link Difference}.
 *
 * @category Test
 * @example
 * ```typescript
 * const differences: Differences<string> = [
 * 	{
 * 		kind: "E",
 * 		path: ["🟢", "🟩"],
 * 		lhs: "🟢",
 * 		rhs: "🟩",
 * 	}
 * ];
 * ```
 */
export type Differences<Value = unknown> = ReadOnlyArray<Difference<Value>>;
