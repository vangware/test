/**
 * Checks if given path is a test file (ends with .test.ext).
 *
 * @category Internal
 */
export const isTestFile = (file: string) => /\.test\.\w+$/gu.test(file);
