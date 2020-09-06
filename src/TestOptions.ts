import { MaybePromise } from "./MaybePromise";

export type TestOptions<OutputType> = {
	readonly given: string;
	readonly must: string;
	readonly received: MaybePromise<OutputType>;
	readonly wanted: MaybePromise<OutputType>;
};

export default TestOptions;
