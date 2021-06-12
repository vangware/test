import { foregroundGreen, foregroundRed } from "@vangware/ansi";
import type { ReadOnlyArray } from "@vangware/types";
import { comparePrimitives } from "../../src/compare/comparePrimitives";
import { suite } from "../../src/suite/suite";

export default suite([
	{
		given: "2 different strings",
		must: "return comparison message",
		received: comparePrimitives("bar")("foo"),
		wanted: [
			`${foregroundRed("Received:")} "foo"`,
			`${foregroundGreen("Wanted:")}   "bar"`
		].join("\n")
	},
	{
		given: "2 different numbers",
		must: "return comparison message",
		received: comparePrimitives(13)(42),
		wanted: [
			`${foregroundRed("Received:")} 42`,
			`${foregroundGreen("Wanted:")}   13`
		].join("\n")
	},
	{
		given: "2 different types",
		must: "return comparison message",
		received: comparePrimitives<ReadOnlyArray<number> | number>(13)([42]),
		wanted: [
			`${foregroundRed("Received:")} [42]`,
			`${foregroundGreen("Wanted:")}   13`
		].join("\n")
	}
]);
