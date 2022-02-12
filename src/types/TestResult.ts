import type { Differences } from "./Differences.js";
import type { Test } from "./Test.js";

/**
 * Object that describes a test result (given, must and differences).
 *
 * @category Test
 * @example
 * ```typescript
 * const testResult: TestResult<string> = {
 * 	given: "🟢",
 * 	must: "🟩",
 * 	differences: [
 * 		{
 * 			kind: "E",
 * 			path: ["🟢", "🟩"],
 * 			lhs: "🟢",
 * 			rhs: "🟩",
 * 		}
 * 	],
 * };
 * ```
 */
export type TestResult<Value = unknown> = Pick<Test, "given" | "must"> & {
	readonly differences?: Differences<Value>;
};
