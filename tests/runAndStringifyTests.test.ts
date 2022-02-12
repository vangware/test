import { bold, foregroundBrightRed, underlined } from "@vangware/ansi";
import { FAIL, PASS, TEST } from "../src/constants.js";
import { runAndStringifyTests } from "../src/runAndStringifyTests.js";
import type { Tests } from "../src/types/Tests.js";

const filename = "file:///example/test.js";

export default [
	{
		given: "a passing test",
		must: "return correct string",
		received: runAndStringifyTests({
			[filename]: [
				{
					given: "🟢",
					must: "🟩",
					received: "🟩",
					wanted: "🟩",
				},
			],
		}),
		wanted: `${TEST} ${underlined(
			filename,
		)}\n${PASS} Given ${bold`🟢`}, must ${bold`🟩`}.`,
	},
	{
		given: "a failing test",
		must: "return correct string",
		received: runAndStringifyTests({
			[filename]: [
				{
					given: "🟢",
					must: "🟩",
					received: "❌",
					wanted: "🟩",
				},
			],
		}).catch((error: string) => error),
		wanted: `${TEST} ${underlined(
			filename,
		)}\n${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
	},
	{
		given: "an empty set of tests",
		must: "return an empty string",
		received: runAndStringifyTests({}),
		wanted: "",
	},
] as Tests<string>;
