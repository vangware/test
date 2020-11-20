import { suite } from "../../src/suite/suite";
import { stringify } from "../../src/utils/stringify";

export default suite([
	{
		given: "a number",
		must: "return stringified version of that number",
		received: stringify(1),
		wanted: "1"
	},
	{
		given: "an array of numbers",
		must: "return stringified version of that array of numbers",
		received: stringify([0, 1, 2, 3]),
		wanted: "[0,1,2,3]"
	},
	{
		given: "a string",
		must: "return stringified version of that string",
		received: stringify("foo"),
		wanted: `"foo"`
	},
	{
		given: "an array of strings",
		must: "return stringified version of that array of strings",
		received: stringify(["foo", "bar"]),
		wanted: `["foo","bar"]`
	},
	{
		given: "an object",
		must: "return stringified version of that object",
		received: stringify({ bar: "bar", foo: "foo" }),
		wanted: `{"bar":"bar","foo":"foo"}`
	},
	{
		given: "an undefined value",
		must: "return stringified version of undefined",
		received: stringify(undefined),
		wanted: "undefined"
	}
]);
