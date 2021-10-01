import { suite } from "../../src/suite/suite";
import { deepEqual } from "../../src/utils/deepEqual";

// eslint-disable-next-line functional/functional-parameters
const valueOfBase = { valueOf: () => "a" };
// eslint-disable-next-line functional/functional-parameters
const valueOfSame = { valueOf: () => "a" };
// eslint-disable-next-line functional/functional-parameters
const valueOfDiff = { valueOf: () => "b" };
// eslint-disable-next-line functional/functional-parameters
const toStringBase = { toString: () => "a" };
// eslint-disable-next-line functional/functional-parameters
const toStringSame = { toString: () => "a" };
// eslint-disable-next-line functional/functional-parameters
const toStringDiff = { toString: () => "b" };

export default suite([
	{
		given: "two equal strings",
		must: "return true",
		received: deepEqual("")(""),
		wanted: true,
	},
	{
		given: "two equal numbers",
		must: "return true",
		received: deepEqual(0)(0),
		wanted: true,
	},
	{
		given: "two equal booleans",
		must: "return true",
		received: deepEqual(true)(true),
		wanted: true,
	},
	{
		given: "two equal objects",
		must: "return true",
		received: deepEqual({})({}),
		wanted: true,
	},
	{
		given: "two equal arrays",
		must: "return true",
		received: deepEqual([])([]),
		wanted: true,
	},
	{
		given: "two similar (but not equal) objects",
		must: "return false",
		received: deepEqual({ foo: "foo" })({ foo: "bar" }),
		wanted: false,
	},
	{
		given: "two objects with different order in props",
		must: "return false",
		received: deepEqual({ bar: "bar", foo: "foo" })({
			foo: "foo",
			// eslint-disable-next-line sort-keys
			bar: "bar",
		}),
		wanted: true,
	},
	{
		given: "two similar (but not equal) arrays",
		must: "return false",
		received: deepEqual([1, 2, 3])([1, 2, 3, 4]),
		wanted: false,
	},
	{
		given: "two different RegExps",
		must: "return false",
		received: deepEqual(/./gu)(/./gmu),
		wanted: false,
	},
	{
		given: "two equal RegExps",
		must: "return true",
		received: deepEqual(/./gu)(/./gu),
		wanted: true,
	},
	{
		given: "two different valueOf objects",
		must: "return false",
		received: deepEqual(valueOfBase)(valueOfDiff),
		wanted: false,
	},
	{
		given: "two equal valueOf objects",
		must: "return true",
		received: deepEqual(valueOfBase)(valueOfSame),
		wanted: true,
	},
	{
		given: "two different toString objects",
		must: "return false",
		received: deepEqual(toStringBase)(toStringDiff),
		wanted: false,
	},
	{
		given: "two equal toString objects",
		must: "return true",
		received: deepEqual(toStringBase)(toStringSame),
		wanted: true,
	},
]);
