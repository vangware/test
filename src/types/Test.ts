import type { MaybePromise } from "./MaybePromise";

/**
 * Object that describes a test.
 *
 * @category Test
 */
export type Test<Value> = {
	/** String explaining the given value. */
	readonly given: string;

	/** String explaining what the test must return. */
	readonly must: string;

	/** Value being tested. */
	readonly received: MaybePromise<Value>;

	/** Expected value. */
	readonly wanted: MaybePromise<Value>;
};
