import { suite } from "../../src/suite/suite";
import { areTestResults } from "../../src/test/areTestResults";

export default suite([
	{
		given: "an invalid test result array",
		must: "return false",
		received: areTestResults([{}]),
		wanted: false,
	},
	{
		given: "a valid test result array with errors",
		must: "return false",
		received: areTestResults([
			{
				error: "error!",
				given: "failed",
				must: "fail",
			},
		]),
		wanted: true,
	},
	{
		given: "a valid test result array without errors",
		must: "return true",
		received: areTestResults([{ given: "passed", must: "pass" }]),
		wanted: true,
	},
]);
