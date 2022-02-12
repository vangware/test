import type { TestResult } from "../src/index.js";
import { test } from "../src/test.js";
import type { Tests } from "../src/types/Tests.js";

export default [
	{
		given: "a passing test",
		must: "return object with given and must",
		received: test({
			given: "🟢",
			must: "🟩",
			received: "🟩",
			wanted: "🟩",
		}),
		wanted: { given: "🟢", must: "🟩" },
	},
	{
		given: "a failing test",
		must: "return object with given, must, and differences",
		received: test({
			given: "🟢",
			must: "🟩",
			received: "❌",
			wanted: "🟩",
		}),
		wanted: {
			differences: [{ kind: "E", lhs: "🟩", rhs: "❌" }],
			given: "🟢",
			must: "🟩",
		},
	},
	{
		given: "a throwing test",
		must: "return object with error",
		received: test({
			given: "🟢",
			must: "🟩",
			received: Promise.reject("❌"),
			wanted: "🟩",
		}),
		wanted: {
			differences: [{ error: "❌", kind: "X" }],
			given: "🟢",
			must: "🟩",
		},
	},
] as Tests<TestResult>;
