/**
 * Checks if given path is a test file (ends with .test.ext).
 * @param path File path.
 */
export const isTestFile = (path: string) => /\.test\.\w+$/gu.test(path);

export default isTestFile;
