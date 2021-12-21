import { comparePrimitives } from "../../src/compare/comparePrimitives.js";
import { FAIL, PASS } from "../../src/constants.js";
import { stringifySuiteResults } from "../../src/suite/stringifySuiteResults.js";
import { suite } from "../../src/suite/suite.js";
import { testName } from "../../src/test/testName.js";

const error = comparePrimitives(true)(false);

export default suite([
	{
		given: "a empty list of suites",
		must: "return suite results",
		received: stringifySuiteResults([
			{
				failed: [],
				name: "test-1",
				passed: [],
			},
		]),
		wanted: `${PASS} test-1`,
	},
	{
		given: "a suite with a failed test",
		must: "return suite results",
		received: stringifySuiteResults([
			{
				failed: [
					{
						error,
						given: "failed",
						must: "fail",
					},
				],
				name: "test-2",
				passed: [],
			},
		]),
		wanted: `${FAIL} test-2\n\n${testName({
			error,
			given: "failed",
			must: "fail",
		})}:\n\n${error}\n`,
	},
	{
		given: "a suite with a passed test",
		must: "return suite results",
		received: stringifySuiteResults([
			{
				failed: [],
				name: "test-3",
				passed: [
					{
						given: "passed",
						must: "pass",
					},
				],
			},
		]),
		wanted: `${PASS} test-3`,
	},
	{
		given: "a suite with a passed and a failed test",
		must: "return suite results",
		received: stringifySuiteResults([
			{
				failed: [
					{
						error,
						given: "failed",
						must: "fail",
					},
				],
				name: "test-4",
				passed: [
					{
						given: "passed",
						must: "pass",
					},
				],
			},
		]),
		wanted: `${FAIL} test-4\n\n${testName({
			error,
			given: "failed",
			must: "fail",
		})}:\n\n${error}\n`,
	},
]);
