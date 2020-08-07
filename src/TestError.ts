import { compare } from "uvu/diff";

/**
 * TestError class to be used to throw when the values aren't equal.
 */
// eslint-disable-next-line functional/no-class
export class TestError<OutputType> extends Error {
	public readonly name = "Test";
	public readonly code = "TEST_ERROR";
	public readonly details: string;
	// Temporary until https://github.com/lukeed/uvu/pull/41 is merged:
	public readonly operator = "equal";

	public constructor(
		options: {
			readonly wanted?: OutputType;
			readonly received?: OutputType;
		} = {}
	) {
		// eslint-disable-next-line functional/no-expression-statement
		super();
		// eslint-disable-next-line functional/no-expression-statement, functional/no-this-expression
		this.details = compare(options.wanted, options.received);
		// eslint-disable-next-line functional/no-expression-statement, functional/no-this-expression
		this.stack = "";
	}
}
