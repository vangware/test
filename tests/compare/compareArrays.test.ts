import { compareArrays } from "../../src/compare/compareArrays";
import { UNWANTED_COMMENT } from "../../src/constants";
import { suite } from "../../src/suite/suite";
import { indentMap } from "../../src/utils/indentMap";
import { missingComment } from "../../src/utils/missingComment";

export default suite([
	{
		given: "2 different arrays",
		must: "return comparison message",
		received: compareArrays([0, 1, 2, 3])([2, 3, 4, 0]),
		wanted: [
			"Received:\t[",
			...indentMap([
				missingComment("0, 1"),
				"2,",
				"3,",
				`4, ${UNWANTED_COMMENT}`,
				`0  ${UNWANTED_COMMENT}`
			]),
			"]"
		].join("\n")
	},
	{
		given: "2 different arrays with matching elements at the end",
		must: "return comparison message",
		received: compareArrays([0, 1, 2, 3])([13, 13, 2, 3]),
		wanted: [
			"Received:\t[",
			...indentMap([
				missingComment("0, 1"),
				`13, ${UNWANTED_COMMENT}`,
				`13, ${UNWANTED_COMMENT}`,
				"2,",
				"3"
			]),
			"]"
		].join("\n")
	}
]);
