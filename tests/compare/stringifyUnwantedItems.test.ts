import { stringifyUnwantedItems } from "../../src/compare/stringifyUnwantedItems";
import { UNWANTED_COMMENT } from "../../src/constants";
import { suite } from "../../src/suite/suite";

export default suite([
	{
		given: "an array of unwanted items at the end of the parent",
		must: "return comparison string array",
		received: stringifyUnwantedItems(true)([0, 1, 2, 3]),
		wanted: ["0,", "1,", "2,", "3 "].map(
			value => `${value} ${UNWANTED_COMMENT}`
		)
	},
	{
		given: "an array of unwanted items in the middle of the parent",
		must: "return comparison string array",
		received: stringifyUnwantedItems(false)([0, 1, 2, 3]),
		wanted: ["0,", "1,", "2,", "3,"].map(
			value => `${value} ${UNWANTED_COMMENT}`
		)
	}
]);
