import { arrayMap } from "@vangware/utils";
import { testResultToString } from "./testResultToString";

/**
 * Takes an array of `TestResult` and returns an array of strings.
 */
export const testResultToStringMap = arrayMap(testResultToString);
