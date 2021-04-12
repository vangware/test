/**
 * Maps trough an array and sets an argument to `true` when is the last item.
 *
 * @template Item Type of the items in the array.
 * @template Output Output type after mapping.
 * @param mapper Mapping function with `last` boolean argument.
 */
export const lastAwareMap = <Item, Output>(
	mapper: (last: boolean) => (item: Item) => Output
) =>
	/**
	 * @param source Source array to be mapped.
	 */
	(source: ReadonlyArray<Item>) =>
		// eslint-disable-next-line max-params
		source.map((item, index) => mapper(index === source.length - 1)(item));
