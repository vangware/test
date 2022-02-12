import type { Predicate } from "@vangware/types";
import type { ReadOnlyURL } from "./types/ReadOnlyURL.js";

/**
 * Checks if given path is a test file (ends with .test.ext).
 *
 * @category File System
 * @example
 * ```typescript
 * isTestFile(new URL("file:///tests/vangware.test.ts")); // true
 * isTestFile(new URL("file:///tests/vangware.ts")); // false
 * ```
 * @param path Path to check.
 * @returns `true` if given path ends with `.test.ext`, `false` otherwise.
 */
export const isTestFilePath: Predicate<ReadOnlyURL> = ({ pathname }) =>
	/\.test\.\w+$/gu.test(pathname);
