import { suite } from "../../src/suite/suite";
import { testResultsFilterTuple } from "../../src/test/testResultsFilterTuple";

export default suite([
	{
		given: "a test that passed",
		must: "return tuple with passed filled and failed empty",
		received: testResultsFilterTuple([
			{
				given: "given",
				must: "must"
			}
		]),
		wanted: [
			[
				{
					given: "given",
					must: "must"
				}
			],
			[]
		]
	},
	{
		given: "a test that failed",
		must: "return tuple with passed empty and failed filled",
		received: testResultsFilterTuple([
			{
				error: "error!",
				given: "given",
				must: "must"
			}
		]),
		wanted: [
			[],
			[
				{
					error: "error!",
					given: "given",
					must: "must"
				}
			]
		]
	},
	{
		given: "one of each test",
		must: "return tuple with both items filled",
		received: testResultsFilterTuple([
			{
				error: "error!",
				given: "given",
				must: "must"
			},
			{
				given: "given",
				must: "must"
			}
		]),
		wanted: [
			[
				{
					given: "given",
					must: "must"
				}
			],
			[
				{
					error: "error!",
					given: "given",
					must: "must"
				}
			]
		]
	}
]);
