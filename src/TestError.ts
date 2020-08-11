import { compare } from "uvu/diff";

/**
 * TestError class to be used to throw when the values aren't equal.
 */
// eslint-disable-next-line functional/no-class
export class TestError<OutputType> extends Error {
	public readonly name = "Test";
	public readonly code = "TEST_ERROR";
	public readonly details: string;

	public constructor(
		options: {
			readonly wanted?: OutputType;
			readonly received?: OutputType;
		} = {}
	) {
		// eslint-disable-next-line functional/no-expression-statement
		super();
		// eslint-disable-next-line functional/no-expression-statement, functional/no-this-expression
		this.details = compare(options.received, options.wanted);
		// eslint-disable-next-line functional/no-expression-statement, functional/no-this-expression
		this.stack = "";
	}
}
