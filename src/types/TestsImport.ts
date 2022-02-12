import type { ReadOnlyRecord } from "@vangware/types";
import type { Test } from "./Test.js";
import type { Tests } from "./Tests.js";

/**
 * Promise import of a file containing {@link Test} or {@link Tests}.
 *
 * @category File System
 * @category Test
 */
export type TestsImport = Promise<ReadOnlyRecord<Test | Tests>>;
