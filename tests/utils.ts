import type { AsynchronousIterable, ReadOnlyArray } from "@vangware/types";

export const iterableToArray = async <Item>(
	iterable: AsynchronousIterable<Item>,
): Promise<ReadOnlyArray<Item>> => {
	const output = [];

	// eslint-disable-next-line functional/no-loop-statement
	for await (const item of iterable) {
		// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
		output.push(item);
	}

	return output;
};
