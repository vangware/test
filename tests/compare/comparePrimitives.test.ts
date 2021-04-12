import { greenText, redText } from "@vangware/forcli";
import { comparePrimitives } from "../../src/compare/comparePrimitives";
import { suite } from "../../src/suite/suite";
import { joinNewLine } from "../../src/utils/joinNewLine";

export default suite([
	{
		given: "2 different strings",
		must: "return comparison message",
		received: comparePrimitives("bar")("foo"),
		wanted: joinNewLine([
			`${redText("Received:")} "foo"`,
			`${greenText("Wanted:")}   "bar"`
		])
	},
	{
		given: "2 different numbers",
		must: "return comparison message",
		received: comparePrimitives(13)(42),
		wanted: joinNewLine([
			`${redText("Received:")} 42`,
			`${greenText("Wanted:")}   13`
		])
	},
	{
		given: "2 different types",
		must: "return comparison message",
		received: comparePrimitives<ReadonlyArray<number> | number>(13)([42]),
		wanted: joinNewLine([
			`${redText("Received:")} [42]`,
			`${greenText("Wanted:")}   13`
		])
	}
]);
