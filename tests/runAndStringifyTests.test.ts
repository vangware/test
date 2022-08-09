import { bold, foregroundBrightRed, underlined } from "@vangware/ansi";
import { FAIL, PASS, TEST } from "../src/constants.js";
import { runAndStringifyTests } from "../src/runAndStringifyTests.js";
import type { Tests } from "../src/types/Tests.js";

const filenameA = "file:///example/test-a.js";
const filenameB = "file:///example/test-b.js";

export default [
	{
		given: "a passing test",
		must: "return correct string",
		received: runAndStringifyTests({
			[filenameA]: [
				{
					given: "🟢",
					must: "🟩",
					received: "🟩",
					wanted: "🟩",
				},
			],
		}),
		wanted: `${TEST} ${underlined(
			filenameA,
		)}\n${PASS} Given ${bold`🟢`}, must ${bold`🟩`}.`,
	},
	{
		given: "a failing test",
		must: "return correct string",
		received: runAndStringifyTests({
			[filenameA]: [
				{
					given: "🟢",
					must: "🟩",
					received: "❌",
					wanted: "🟩",
				},
			],
		}).catch((error: string) => error),
		wanted: `${TEST} ${underlined(
			filenameA,
		)}\n${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
	},
	{
		given: "a failing and a passing test in different files",
		must: "return correct string",
		received: runAndStringifyTests({
			[filenameA]: [
				{
					given: "🟢",
					must: "🟩",
					received: "❌",
					wanted: "🟩",
				},
			],
			[filenameB]: [
				{
					given: "🟢",
					must: "🟩",
					received: "🟩",
					wanted: "🟩",
				},
			],
		}).catch((error: string) => error),
		wanted: `${TEST} ${underlined(
			filenameB,
		)}\n${PASS} Given ${bold`🟢`}, must ${bold`🟩`}.\n${TEST} ${underlined(
			filenameA,
		)}\n${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
	},
	{
		given: "a failing and a passing test in the same file",
		must: "return correct string",
		received: runAndStringifyTests({
			[filenameA]: [
				{
					given: "🟢",
					must: "🟩",
					received: "❌",
					wanted: "🟩",
				},
				{
					given: "🟢",
					must: "🟩",
					received: "🟩",
					wanted: "🟩",
				},
			],
		}).catch((error: string) => error),
		wanted: `${TEST} ${underlined(
			filenameA,
		)}\n${PASS} Given ${bold`🟢`}, must ${bold`🟩`}.\n${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
	},
	{
		given: "a passing and a failing test in different files",
		must: "return correct string",
		received: runAndStringifyTests({
			[filenameA]: [
				{
					given: "🟢",
					must: "🟩",
					received: "🟩",
					wanted: "🟩",
				},
			],
			[filenameB]: [
				{
					given: "🟢",
					must: "🟩",
					received: "❌",
					wanted: "🟩",
				},
			],
		}).catch((error: string) => error),
		wanted: `${TEST} ${underlined(
			filenameA,
		)}\n${PASS} Given ${bold`🟢`}, must ${bold`🟩`}.\n${TEST} ${underlined(
			filenameB,
		)}\n${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
	},
	{
		given: "a passing and a failing test in the same file",
		must: "return correct string",
		received: runAndStringifyTests({
			[filenameA]: [
				{
					given: "🟢",
					must: "🟩",
					received: "🟩",
					wanted: "🟩",
				},
				{
					given: "🟢",
					must: "🟩",
					received: "❌",
					wanted: "🟩",
				},
			],
		}).catch((error: string) => error),
		wanted: `${TEST} ${underlined(
			filenameA,
		)}\n${PASS} Given ${bold`🟢`}, must ${bold`🟩`}.\n${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
	},
	{
		given: "an empty set of tests",
		must: "return an empty string",
		received: runAndStringifyTests({}),
		wanted: "",
	},
] as Tests<string>;
