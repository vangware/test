import type { ReadOnlyArray } from "@vangware/types";

/**
 * Maps trough an array and sets an argument to `true` when is the last item.
 *
 * @category Common
 */
export const lastAwareMap =
	<Item, Output>(mapper: (last: boolean) => (item: Item) => Output) =>
	(input: ReadOnlyArray<Item>) =>
		// eslint-disable-next-line max-params
		input.map((item, index) => mapper(index === input.length - 1)(item));
