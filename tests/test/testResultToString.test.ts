import { dimmed, foregroundGreen, foregroundRed } from "@vangware/ansi";
import { suite } from "../../src/suite/suite";
import { testResultToString } from "../../src/test/testResultToString";

export default suite([
	{
		given: "a test that passed",
		must: "return correct message",
		received: testResultToString({
			given: "given",
			must: "must"
		}),
		wanted: `${foregroundGreen(">")} ${dimmed("Given")} given${dimmed(
			", must"
		)} must.`
	},
	{
		given: "a test that failed",
		must: "return the correct message",
		received: testResultToString({
			error: "error!",
			given: "given",
			must: "must"
		}),
		wanted: `${foregroundRed(">")} ${dimmed("Given")} given${dimmed(
			", must"
		)} must:\n\nerror!\n`
	}
]);
