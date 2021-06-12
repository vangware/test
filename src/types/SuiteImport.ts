import type { SuiteResult } from "./SuiteResult";

/**
 * Promise import of a file containing a suite.
 *
 * @category Suite
 */
export type SuiteImport = Promise<{
	readonly default: SuiteResult | ((name: string) => SuiteResult);
}>;
