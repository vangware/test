import { TestOptions } from "./TestOptions";

export type TestFunction = <OutputType>(
	tests: readonly TestOptions<OutputType>[]
	// eslint-disable-next-line functional/no-return-void
) => void;

export default TestFunction;
