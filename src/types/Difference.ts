import type { ReadOnlyArray } from "@vangware/types";

/**
 * Difference object from `deep-diff`, with some customizations on top.
 *
 * @category Test
 * @example
 * ```typescript
 * const difference: Difference<string> = {
 * 	kind: "E",
 * 	path: ["🟢", "🟩"],
 * 	lhs: "🟢",
 * 	rhs: "🟩",
 * };
 * ```
 */
export type Difference<Value = unknown> = {
	/** Only has a value when kind is X. */
	readonly error?: unknown;

	/** Indicates the array index where the change occurred (kind A). */
	readonly index?: number;

	/** Contains a nested change record indicating the change that occurred at the array index (kind A). */
	readonly item?: Difference<Value>;

	/** Indicates the kind of change. */
	readonly kind: "A" | "D" | "E" | "N" | "X";

	/** The value on the left-hand-side of the comparison (`undefined` for kind N). */
	readonly lhs?: Value;

	/** The property path. */
	readonly path?: ReadOnlyArray<string>;

	/** The value on the right-hand-side of the comparison (`undefined` for kind D). */
	readonly rhs?: Value;
};
