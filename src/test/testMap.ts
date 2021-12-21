import type { ReadOnlyArray } from "@vangware/types";
import type { Test } from "../types/Test.js";
import { test } from "./test.js";

/**
 * Map given array of tests.
 *
 * @category Test
 */
export const testMap = <Value>(tests: ReadOnlyArray<Test<Value>>) =>
	tests.map(test);
