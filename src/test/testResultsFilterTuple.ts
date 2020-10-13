import { arrayFilterTuple } from "@vangware/utils";
import { isPassedTestResult } from "./isPassedTestResult";

/**
 * Filter tests results in a tuple `[passed, failed]`.
 */
export const testResultsFilterTuple = arrayFilterTuple(isPassedTestResult);

export default testResultsFilterTuple;
