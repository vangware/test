import { suite } from "../../src/suite/suite";
import { promiseWrap } from "../../src/utils/promiseWrap";

export default suite([
	{
		given: "a number",
		must: "return promise version of that number",
		received: promiseWrap(1),
		wanted: Promise.resolve(1)
	},
	{
		given: "a promise that returns a number",
		must: "return that same promise",
		received: promiseWrap(Promise.resolve(1)),
		wanted: Promise.resolve(1)
	}
]);
