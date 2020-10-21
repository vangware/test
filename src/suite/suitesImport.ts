import { arrayFilterIn, arrayMap } from "@vangware/utils";
import { isSuiteResult } from "./isSuiteResult";
import { suiteImport } from "./suiteImport";

export const suitesImport = (paths: readonly string[]) =>
	Promise.all(arrayMap(suiteImport)(paths)).then(
		arrayFilterIn(isSuiteResult)
	);
