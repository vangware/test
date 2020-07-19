export type TestOptions<OutputType> = {
	readonly given: string;
	readonly must: string;
	readonly received: OutputType | Promise<OutputType>;
	readonly wanted: OutputType | Promise<OutputType>;
};

export default TestOptions;
