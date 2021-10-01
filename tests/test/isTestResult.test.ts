import { suite } from "../../src/suite/suite";
import { isTestResult } from "../../src/test/isTestResult";

export default suite([
	{
		given: "an invalid test result",
		must: "return false",
		received: isTestResult({}),
		wanted: false,
	},
	{
		given: "a valid test result with errors",
		must: "return false",
		received: isTestResult({
			error: "error!",
			given: "failed",
			must: "fail",
		}),
		wanted: true,
	},
	{
		given: "a valid test result without errors",
		must: "return true",
		received: isTestResult({ given: "passed", must: "pass" }),
		wanted: true,
	},
]);
