import type { AsynchronousIterable, ReadOnlyArray } from "@vangware/types";

export const iterableToArray = async <Item>(
	iterable: AsynchronousIterable<Item>,
): Promise<ReadOnlyArray<Item>> => {
	const output = [];

	// eslint-disable-next-line functional/no-loop-statements
	for await (const item of iterable) {
		// eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
		output.push(item);
	}

	return output;
};
