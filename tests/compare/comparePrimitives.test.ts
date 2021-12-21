import { foregroundGreen, foregroundRed } from "@vangware/ansi";
import type { ReadOnlyArray } from "@vangware/types";
import { comparePrimitives } from "../../src/compare/comparePrimitives.js";
import { suite } from "../../src/suite/suite.js";

export default suite([
	{
		given: "2 different strings",
		must: "return comparison message",
		received: comparePrimitives("bar")("foo"),
		wanted: [
			`${foregroundRed("Received:")}\t"foo"`,
			`${foregroundGreen("Wanted:")}\t\t"bar"`,
		].join("\n"),
	},
	{
		given: "2 different numbers",
		must: "return comparison message",
		received: comparePrimitives(13)(42),
		wanted: [
			`${foregroundRed("Received:")}\t42`,
			`${foregroundGreen("Wanted:")}\t\t13`,
		].join("\n"),
	},
	{
		given: "2 different types",
		must: "return comparison message",
		received: comparePrimitives<ReadOnlyArray<number> | number>(13)([42]),
		wanted: [
			`${foregroundRed("Received:")}\t[42]`,
			`${foregroundGreen("Wanted:")}\t\t13`,
		].join("\n"),
	},
]);
