import { dimmed, foregroundGreen, foregroundRed } from "@vangware/ansi";
import { suite } from "../../src/suite/suite.js";
import { stringifyTestResults } from "../../src/test/stringifyTestResults.js";

export default suite([
	{
		given: "a test that passed",
		must: "return correct message",
		received: stringifyTestResults([
			{
				given: "given",
				must: "must",
			},
		]),
		wanted: [
			`${foregroundGreen(">")} ${dimmed("Given")} given${dimmed(
				", must",
			)} must.`,
		],
	},
	{
		given: "a test that failed",
		must: "return the correct message",
		received: stringifyTestResults([
			{
				error: "error!",
				given: "given",
				must: "must",
			},
		]),
		wanted: [
			`${foregroundRed(">")} ${dimmed("Given")} given${dimmed(
				", must",
			)} must:\n\nerror!\n`,
		],
	},
	{
		given: "one of each test",
		must: "return the correct message",
		received: stringifyTestResults([
			{
				given: "given",
				must: "must",
			},
			{
				error: "error!",
				given: "given",
				must: "must",
			},
		]),
		wanted: [
			`${foregroundGreen(">")} ${dimmed("Given")} given${dimmed(
				", must",
			)} must.`,
			`${foregroundRed(">")} ${dimmed("Given")} given${dimmed(
				", must",
			)} must:\n\nerror!\n`,
		],
	},
]);
