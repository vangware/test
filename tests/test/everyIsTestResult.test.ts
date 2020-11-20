import { suite } from "../../src/suite/suite";
import { everyIsTestResult } from "../../src/test/everyIsTestResult";

export default suite([
	{
		given: "an invalid test result array",
		must: "return false",
		received: everyIsTestResult([{}]),
		wanted: false
	},
	{
		given: "a valid test result array with errors",
		must: "return false",
		received: everyIsTestResult([
			{
				error: "error!",
				given: "failed",
				must: "fail"
			}
		]),
		wanted: true
	},
	{
		given: "a valid test result array without errors",
		must: "return true",
		received: everyIsTestResult([{ given: "passed", must: "pass" }]),
		wanted: true
	}
]);
