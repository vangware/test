import { foregroundGreen, foregroundRed } from "@vangware/ansi";
import type { ReadOnlyArray } from "@vangware/types";
import { compare } from "../../src/compare/compare";
import { UNWANTED_COMMENT } from "../../src/constants";
import { suite } from "../../src/suite/suite";
import { indentMap } from "../../src/utils/indentMap";
import { missingComment } from "../../src/utils/missingComment";
import { stringify } from "../../src/utils/stringify";
import { wantedComment } from "../../src/utils/wantedComment";

export default suite([
	{
		given: "2 different arrays",
		must: "return comparison message",
		received: compare([0, 1, 2, 3])([2, 3, 4, 0]),
		wanted: [
			"Received:\t[",
			...indentMap([
				missingComment("0, 1"),
				"2,",
				"3,",
				`4, ${UNWANTED_COMMENT}`,
				`0  ${UNWANTED_COMMENT}`,
			]),
			"]",
		].join("\n"),
	},
	{
		given: "2 different arrays with matching elements at the end",
		must: "return comparison message",
		received: compare([0, 1, 2, 3])([13, 13, 2, 3]),
		wanted: [
			"Received:\t[",
			...indentMap([
				missingComment("0, 1"),
				`13, ${UNWANTED_COMMENT}`,
				`13, ${UNWANTED_COMMENT}`,
				"2,",
				"3",
			]),
			"]",
		].join("\n"),
	},
	{
		given: "2 different objects with missing property",
		must: "return comparison message",
		received: compare<Record<string, string>>({
			bar: "bar",
			foo: "foo",
			foobar: "foobar",
		})({
			bar: "baz",
			baz: "bar",
			foo: "foo",
		}),
		wanted: [
			"Received:\t{",
			...indentMap([
				`bar: "baz", ${wantedComment(stringify("bar"))}`,
				`baz: "bar", ${UNWANTED_COMMENT}`,
				`foo: "foo"`,
				missingComment(stringify("foobar")),
			]),
			"}",
		].join("\n"),
	},
	{
		given: "2 different objects (without missing property)",
		must: "return comparison message",
		received: compare<Record<string, string>>({
			bar: "bar",
			foo: "foo",
		})({
			bar: "baz",
			baz: "bar",
			foo: "foo",
		}),
		wanted: [
			"Received:\t{",
			...indentMap([
				`bar: "baz", ${wantedComment(stringify("bar"))}`,
				`baz: "bar", ${UNWANTED_COMMENT}`,
				`foo: "foo"`,
			]),
			"}",
		].join("\n"),
	},
	{
		given: "2 different strings",
		must: "return comparison message",
		received: compare("bar")("foo"),
		wanted: [
			`${foregroundRed("Received:")}\t"foo"`,
			`${foregroundGreen("Wanted:")}\t\t"bar"`,
		].join("\n"),
	},
	{
		given: "2 different numbers",
		must: "return comparison message",
		received: compare(13)(42),
		wanted: [
			`${foregroundRed("Received:")}\t42`,
			`${foregroundGreen("Wanted:")}\t\t13`,
		].join("\n"),
	},
	{
		given: "2 different types",
		must: "return comparison message",
		received: compare<ReadOnlyArray<number> | number>(13)([42]),
		wanted: [
			`${foregroundRed("Received:")}\t[42]`,
			`${foregroundGreen("Wanted:")}\t\t13`,
		].join("\n"),
	},
]);
