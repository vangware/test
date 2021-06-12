/**
 * Stringifies value reliably (using `JSON.stringify`).
 *
 * @category Common
 */
export const stringify = <Input>(input: Input) =>
	input === undefined || input instanceof RegExp
		? `${input as unknown as string}`
		: JSON.stringify(input);
