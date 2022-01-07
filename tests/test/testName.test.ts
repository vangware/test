import { dimmed, foregroundGreen, foregroundRed } from "@vangware/ansi";
import { suite } from "../../src/suite/suite.js";
import { testName } from "../../src/test/testName.js";

export default suite([
	{
		given: "a test that passed",
		must: "return the correct message",
		received: testName({
			given: "given",
			must: "must",
		}),
		wanted: `${foregroundGreen`>`} ${dimmed`Given`} given${dimmed`, must`} must`,
	},
	{
		given: "a test that failed",
		must: "return the correct message",
		received: testName({
			error: "error!",
			given: "given",
			must: "must",
		}),
		wanted: `${foregroundRed`>`} ${dimmed`Given`} given${dimmed`, must`} must`,
	},
]);
