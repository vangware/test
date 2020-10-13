import SuiteResult from "./SuiteResult";

/**
 * Promise import of a file containing a suite.
 */
export type SuiteImport = Promise<{
	readonly default: SuiteResult | ((name: string) => SuiteResult);
}>;

export default SuiteImport;
