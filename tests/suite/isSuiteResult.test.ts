import { EMPTY } from "../../src/constants";
import { isSuiteResult } from "../../src/suite/isSuiteResult";
import { suite } from "../../src/suite/suite";

export default suite([
	{
		given: "a valid suite result",
		must: "return true",
		received: isSuiteResult({
			failed: [],
			name: EMPTY,
			passed: []
		}),
		wanted: true
	},
	{
		given: "an invalid suite result",
		must: "return false",
		received: isSuiteResult({}),
		wanted: false
	},
	{
		given: "an invalid suite result with some properties missing",
		must: "return false",
		received: isSuiteResult({
			name: EMPTY
		}),
		wanted: false
	},
	{
		given: "an invalid suite result with wrong types",
		must: "return false",
		received: isSuiteResult({
			failed: EMPTY,
			name: EMPTY,
			passed: EMPTY
		}),
		wanted: false
	}
]);
