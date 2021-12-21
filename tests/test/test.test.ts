import { comparePrimitives } from "../../src/compare/comparePrimitives.js";
import { suite } from "../../src/suite/suite.js";
import { test } from "../../src/test/test.js";

export default suite([
	{
		given: "a failed test",
		must: "return test result with error",
		received: test({
			given: "failed",
			must: "fail",
			received: false,
			wanted: true,
		}),
		wanted: {
			error: comparePrimitives(true)(false),
			given: "failed",
			must: "fail",
		},
	},
	{
		given: "a passed test",
		must: "return test result without error",
		received: test({
			given: "passed",
			must: "pass",
			received: true,
			wanted: true,
		}),
		wanted: {
			given: "passed",
			must: "pass",
		},
	},
]);
