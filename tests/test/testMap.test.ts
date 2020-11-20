import { comparePrimitives } from "../../src/compare/comparePrimitives";
import { suite } from "../../src/suite/suite";
import { testMap } from "../../src/test/testMap";

export default suite([
	{
		given: "an array of test with a failed test",
		must: "return test result with error",
		received: Promise.all(
			testMap([
				{
					given: "failed",
					must: "fail",
					received: false,
					wanted: true
				}
			])
		),
		wanted: [
			{
				error: comparePrimitives(true)(false),
				given: "failed",
				must: "fail"
			}
		]
	},
	{
		given: "an array of test with a passed test",
		must: "return test result without error",
		received: Promise.all(
			testMap([
				{
					given: "passed",
					must: "pass",
					received: true,
					wanted: true
				}
			])
		),
		wanted: [
			{
				given: "passed",
				must: "pass"
			}
		]
	}
]);
