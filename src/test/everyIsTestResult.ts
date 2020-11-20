import { arrayEvery } from "@vangware/utils";
import { isTestResult } from "./isTestResult";

/**
 * Check if all the items in an array are `TestResult`s.
 */
export const everyIsTestResult = arrayEvery(isTestResult);
