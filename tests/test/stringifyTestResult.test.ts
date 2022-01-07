import { dimmed, foregroundGreen, foregroundRed } from "@vangware/ansi";
import { suite } from "../../src/suite/suite.js";
import { stringifyTestResult } from "../../src/test/stringifyTestResult.js";

export default suite([
	{
		given: "a test that passed",
		must: "return correct message",
		received: stringifyTestResult({
			given: "given",
			must: "must",
		}),
		wanted: `${foregroundGreen`>`} ${dimmed`Given`} given${dimmed`, must`} must.`,
	},
	{
		given: "a test that failed",
		must: "return the correct message",
		received: stringifyTestResult({
			error: "error!",
			given: "given",
			must: "must",
		}),
		wanted: `${foregroundRed`>`} ${dimmed`Given`} given${dimmed`, must`} must:\n\nerror!\n`,
	},
]);
