import type { MaybePromise } from "@vangware/types";

/**
 * Object that describes a test.
 *
 * @category Test
 * @example
 * ```typescript
 * const test: Test<number> = {
 * 	given: "a number",
 * 	must: "make it double",
 * 	received: double(2),
 * 	wanted: 4,
 * };
 * ```
 */
export type Test<Value = unknown> = {
	/** Description of the given value. */
	readonly given: string;

	/** Description of the wanted value. */
	readonly must: string;

	/** Value being tested. */
	readonly received: () => MaybePromise<Value>;

	/** Expected value. */
	readonly wanted: () => MaybePromise<Value>;
};
