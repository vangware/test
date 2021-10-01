import type { ReadOnlyArray, ReadOnlyRecord } from "@vangware/types";

/**
 * Deep compare inspired by `fast-deep-equal` (which is faster than this).
 *
 * @category Common
 */
export const deepEqual =
	<Wanted>(wanted: Wanted) =>
	<Received>(received: Received): boolean =>
		Object.is(wanted, received) ||
		// If both `wanted` and `received` are objects
		(typeof wanted === "object" &&
			typeof received === "object" &&
			// And they have the same constructors
			(wanted as ReadOnlyRecord).constructor ===
				(received as ReadOnlyRecord).constructor &&
			// If they are arrays
			(Array.isArray(wanted)
				? // Compare length
				  wanted.length ===
						(received as unknown as ReadOnlyArray).length &&
				  // And then values
				  // eslint-disable-next-line max-params
				  wanted.every((value, index) =>
						deepEqual(value)(
							(received as unknown as ReadOnlyArray)[index],
						),
				  )
				: // If they are RegExps
				wanted instanceof RegExp
				? // Compare `source` and `flags`
				  wanted.source === (received as unknown as RegExp).source &&
				  wanted.flags === (received as unknown as RegExp).flags
				: // If the `valueOf` is not the default of `Object`
				(wanted as ReadOnlyRecord).valueOf !== Object.prototype.valueOf
				? // Compare `valueOf`
				  (wanted as ReadOnlyRecord).valueOf() ===
				  (received as ReadOnlyRecord).valueOf()
				: // If the `toString` is not the default of `Object`
				(wanted as ReadOnlyRecord).toString !==
				  Object.prototype.toString
				? // Compare `toString`
				  // eslint-disable-next-line @typescript-eslint/no-base-to-string
				  (wanted as ReadOnlyRecord).toString() ===
				  // eslint-disable-next-line @typescript-eslint/no-base-to-string
				  (received as ReadOnlyRecord).toString()
				: // Finally, compare property by property
				  Object.entries(wanted).length ===
						Object.entries(received).length &&
				  Object.entries(wanted).every(([key, value]) =>
						deepEqual(value)((received as ReadOnlyRecord)[key]),
				  )));
