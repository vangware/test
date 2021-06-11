import { foregroundGreen, foregroundRed } from "@vangware/ansi";
import { comparePrimitives } from "../../src/compare/comparePrimitives";
import { suite } from "../../src/suite/suite";
import { joinNewLine } from "../../src/utils/joinNewLine";

export default suite([
	{
		given: "2 different strings",
		must: "return comparison message",
		received: comparePrimitives("bar")("foo"),
		wanted: joinNewLine([
			`${foregroundRed("Received:")} "foo"`,
			`${foregroundGreen("Wanted:")}   "bar"`
		])
	},
	{
		given: "2 different numbers",
		must: "return comparison message",
		received: comparePrimitives(13)(42),
		wanted: joinNewLine([
			`${foregroundRed("Received:")} 42`,
			`${foregroundGreen("Wanted:")}   13`
		])
	},
	{
		given: "2 different types",
		must: "return comparison message",
		received: comparePrimitives<ReadonlyArray<number> | number>(13)([42]),
		wanted: joinNewLine([
			`${foregroundRed("Received:")} [42]`,
			`${foregroundGreen("Wanted:")}   13`
		])
	}
]);
