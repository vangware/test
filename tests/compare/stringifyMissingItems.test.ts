import { stringifyMissingItems } from "../../src/compare/stringifyMissingItems.js";
import { suite } from "../../src/suite/suite.js";
import { missingComment } from "../../src/utils/missingComment.js";

export default suite([
	{
		given: "an array of missing items",
		must: "return comparison string",
		received: stringifyMissingItems([0, 1, 2, 3]),
		wanted: missingComment("0, 1, 2, 3"),
	},
]);
