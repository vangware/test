/**
 * Stringifies value reliably (using `JSON.stringify`).
 *
 * @category Common
 */
export const stringify = <Source>(source: Source) =>
	source === undefined
		? `${source as unknown as string}`
		: source instanceof RegExp
		? source.toString()
		: JSON.stringify(source);
