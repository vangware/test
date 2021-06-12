import { compareObjects } from "../../src/compare/compareObjects";
import { UNWANTED_COMMENT } from "../../src/constants";
import { suite } from "../../src/suite/suite";
import { indentMap } from "../../src/utils/indentMap";
import { missingComment } from "../../src/utils/missingComment";
import { stringify } from "../../src/utils/stringify";
import { wantedComment } from "../../src/utils/wantedComment";

export default suite([
	{
		given: "2 different objects with missing property",
		must: "return comparison message",
		received: compareObjects<Record<string, string>>({
			bar: "bar",
			foo: "foo",
			foobar: "foobar"
		})({
			bar: "baz",
			baz: "bar",
			foo: "foo"
		}),
		wanted: [
			"Received:\t{",
			...indentMap([
				`bar: "baz", ${wantedComment(stringify("bar"))}`,
				`baz: "bar", ${UNWANTED_COMMENT}`,
				`foo: ${stringify("foo")}`,
				missingComment(stringify("foobar"))
			]),
			"}"
		].join("\n")
	},
	{
		given: "2 different objects (without missing property)",
		must: "return comparison message",
		received: compareObjects<Record<string, string>>({
			bar: "bar",
			foo: "foo"
		})({
			bar: "baz",
			baz: "bar",
			foo: "foo"
		}),
		wanted: [
			"Received:\t{",
			...indentMap([
				`bar: "baz", ${wantedComment(stringify("bar"))}`,
				`baz: "bar", ${UNWANTED_COMMENT}`,
				`foo: ${stringify("foo")}`
			]),
			"}"
		].join("\n")
	}
]);
