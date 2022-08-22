import type { ReadOnlyRecord } from "@vangware/types";
import type { Test } from "./Test.js";
import type { Tests } from "./Tests.js";

/**
 * Promise import of a file containing `Test` or `Tests`.
 *
 * @category File System
 * @category Test
 */
export type TestsImport<Value = unknown> = Promise<
	ReadOnlyRecord<Test<Value> | Tests<Value>>
>;
