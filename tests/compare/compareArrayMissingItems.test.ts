import { compareArrayMissingItems } from "../../src/compare/compareArrayMissingItems";
import { suite } from "../../src/suite/suite";
import { missingComment } from "../../src/utils/missingComment";

export default suite([
	{
		given: "an array of missing items",
		must: "return comparison string",
		received: compareArrayMissingItems([0, 1, 2, 3]),
		wanted: missingComment("0, 1, 2, 3")
	}
]);
