import { stringifyMatchingItems } from "../../src/compare/stringifyMatchingItems.js";
import { suite } from "../../src/suite/suite.js";

export default suite([
	{
		given: "an array of matching items at the end of the parent",
		must: "return comparison string array",
		received: stringifyMatchingItems(true)([0, 1, 2, 3]),
		wanted: ["0,", "1,", "2,", "3"],
	},
	{
		given: "an array of matching items in the middle of the parent",
		must: "return comparison string array",
		received: stringifyMatchingItems(false)([0, 1, 2, 3]),
		wanted: ["0,", "1,", "2,", "3,"],
	},
]);
