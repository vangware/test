import type { SuiteResult } from "./SuiteResult.js";
import type { URLOrString } from "./URLOrString.js";

/**
 * Promise import of a file containing a suite.
 *
 * @category Suite
 */
export type SuiteImport = Promise<{
	readonly default: SuiteResult | ((name: URLOrString) => SuiteResult);
}>;
