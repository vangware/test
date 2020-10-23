import type { ValueOrPromise } from "./ValueOrPromise";

/**
 * Object that describes a test.
 */
export type Test<Value> = {
	/**
	 * String explaining the given value.
	 */
	readonly given: string;

	/**
	 * String explaining what the test must return.
	 */
	readonly must: string;

	/**
	 * Value being tested.
	 */
	readonly received: ValueOrPromise<Value>;

	/**
	 * Expected value.
	 */
	readonly wanted: ValueOrPromise<Value>;
};
