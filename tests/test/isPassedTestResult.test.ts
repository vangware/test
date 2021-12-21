import { suite } from "../../src/suite/suite.js";
import { isPassedTestResult } from "../../src/test/isPassedTestResult.js";

export default suite([
	{
		given: "an invalid test result",
		must: "return false",
		received: isPassedTestResult({}),
		wanted: false,
	},
	{
		given: "a valid test result with errors",
		must: "return false",
		received: isPassedTestResult({
			error: "error!",
			given: "failed",
			must: "fail",
		}),
		wanted: false,
	},
	{
		given: "a valid test result without errors",
		must: "return true",
		received: isPassedTestResult({ given: "passed", must: "pass" }),
		wanted: true,
	},
]);
