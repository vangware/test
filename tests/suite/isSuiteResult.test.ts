import { isSuiteResult } from "../../src/suite/isSuiteResult.js";
import { suite } from "../../src/suite/suite.js";

export default suite([
	{
		given: "a valid suite result",
		must: "return true",
		received: isSuiteResult({
			failed: [],
			name: "",
			passed: [],
		}),
		wanted: true,
	},
	{
		given: "an invalid suite result",
		must: "return false",
		received: isSuiteResult({}),
		wanted: false,
	},
	{
		given: "an invalid suite result with some properties missing",
		must: "return false",
		received: isSuiteResult({
			name: "",
		}),
		wanted: false,
	},
	{
		given: "an invalid suite result with wrong types",
		must: "return false",
		received: isSuiteResult({
			failed: "",
			name: "",
			passed: "",
		}),
		wanted: false,
	},
]);
