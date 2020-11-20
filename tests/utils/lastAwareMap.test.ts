import { suite } from "../../src/suite/suite";
import { lastAwareMap } from "../../src/utils/lastAwareMap";

const lastAwareMapTest = lastAwareMap(last => _ => last);

export default suite([
	{
		given: "an array with 1 element",
		must: "return true for index 0",
		received: lastAwareMapTest(["last"]),
		wanted: [true]
	},
	{
		given: "an array with 5 element",
		must: "return true for index 4",
		received: lastAwareMapTest(["foo", "bar", "baz", "foobar", "last"]),
		wanted: [false, false, false, false, true]
	}
]);
