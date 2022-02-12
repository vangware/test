import type { ReadOnlyRecord } from "@vangware/types";
import type { Tests } from "./Tests.js";

/**
 * Object that maps path->{@link Tests}.
 *
 * @category Test
 * @example
 * ```typescript
 * const testsRecord: TestsRecord = {
 * 	"file:///tests/example.test.ts": [
 * 		{
 * 			given: "a number",
 * 			must: "make it double",
 * 			received: double(2),
 * 			wanted: 4,
 * 		}
 * 	]
 * };
 * ```
 */
export type TestsRecord = ReadOnlyRecord<Tests, string>;
