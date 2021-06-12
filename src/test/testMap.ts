import type { ReadOnlyArray } from "@vangware/types";
import type { Test } from "../types/Test";
import { test } from "./test";

/**
 * Map given array of tests.
 *
 * @category Test
 */
export const testMap = <Value>(tests: ReadOnlyArray<Test<Value>>) =>
	tests.map(test);
