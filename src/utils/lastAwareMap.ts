import type { ReadOnlyArray } from "@vangware/types";

/**
 * Maps trough an array and sets an argument to `true` when is the last item.
 *
 * @category Common
 */
export const lastAwareMap =
	<Item, Output>(mapper: (last: boolean) => (item: Item) => Output) =>
	(source: ReadOnlyArray<Item>) =>
		// eslint-disable-next-line max-params
		source.map((item, index) => mapper(index === source.length - 1)(item));
