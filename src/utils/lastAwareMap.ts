import type { ReadOnlyObjectArray } from "@vangware/utils";

/**
 * Maps trough an array and sets an argument to `true` when is the last item.
 * @param mapper Mapping function with `last` boolean argument.
 */
export const lastAwareMap = <Item, Output>(
	mapper: (last: boolean) => (item: Item) => Output
) =>
	/**
	 * @param source Source array to be mapped.
	 */
	(source: ReadOnlyObjectArray<Item>) =>
		source.map((item, index) => mapper(index === source.length - 1)(item));
