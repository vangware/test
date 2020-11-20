import { dimmed, greenText, redText } from "@vangware/forcli";
import { suite } from "../../src/suite/suite";
import { testName } from "../../src/test/testName";

export default suite([
	{
		given: "a test that passed",
		must: "return the correct message",
		received: testName({
			given: "given",
			must: "must"
		}),
		wanted: `${greenText(">")} ${dimmed("Given")} given${dimmed(
			", must"
		)} must`
	},
	{
		given: "a test that failed",
		must: "return the correct message",
		received: testName({
			error: "error!",
			given: "given",
			must: "must"
		}),
		wanted: `${redText(">")} ${dimmed("Given")} given${dimmed(
			", must"
		)} must`
	}
]);
