import { stringifyMissingItems } from "../../src/compare/stringifyMissingItems";
import { suite } from "../../src/suite/suite";
import { missingComment } from "../../src/utils/missingComment";

export default suite([
	{
		given: "an array of missing items",
		must: "return comparison string",
		received: stringifyMissingItems([0, 1, 2, 3]),
		wanted: missingComment("0, 1, 2, 3"),
	},
]);
