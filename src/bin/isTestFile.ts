import { stringTest } from "@vangware/utils";

/**
 * Checks if given path is a test file (ends with .test.ext).
 */
export const isTestFile = stringTest(/\.test\.\w+$/gu);
