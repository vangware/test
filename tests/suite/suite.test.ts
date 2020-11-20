import { comparePrimitives } from "../../src/compare/comparePrimitives";
import { suite } from "../../src/suite/suite";

const error = comparePrimitives(true)(false);

export default suite([
	{
		given: "a empty list of suites",
		must: "return suite results",
		received: suite([])("test-1"),
		wanted: {
			failed: [],
			name: "test-1",
			passed: []
		}
	},
	{
		given: "a suite with a failed test",
		must: "return suite results",
		received: suite([
			{
				given: "failed",
				must: "fail",
				received: false,
				wanted: true
			}
		])("test-2"),
		wanted: {
			failed: [
				{
					error,
					given: "failed",
					must: "fail"
				}
			],
			name: "test-2",
			passed: []
		}
	},
	{
		given: "a suite with a passed test",
		must: "return suite results",
		received: suite([
			{
				given: "passed",
				must: "pass",
				received: true,
				wanted: true
			}
		])("test-3"),
		wanted: {
			failed: [],
			name: "test-3",
			passed: [
				{
					given: "passed",
					must: "pass"
				}
			]
		}
	},
	{
		given: "a suite with a passed and a failed test",
		must: "return suite results",
		received: suite([
			{
				given: "failed",
				must: "fail",
				received: false,
				wanted: true
			},
			{
				given: "passed",
				must: "pass",
				received: true,
				wanted: true
			}
		])("test-4"),
		wanted: {
			failed: [
				{
					error,
					given: "failed",
					must: "fail"
				}
			],
			name: "test-4",
			passed: [
				{
					given: "passed",
					must: "pass"
				}
			]
		}
	}
]);
