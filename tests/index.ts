import { stringifySuiteResults } from "../src/suite/stringifySuiteResults";
import compareSuite from "./compare/compare.test";
import compareArraysSuite from "./compare/compareArrays.test";
import compareObjectsSuite from "./compare/compareObjects.test";
import comparePrimitivesSuite from "./compare/comparePrimitives.test";
import stringifyMatchingItemsSuite from "./compare/stringifyMatchingItems.test";
import stringifyMissingItemsSuite from "./compare/stringifyMissingItems.test";
import stringifyUnwantedItemsSuite from "./compare/stringifyUnwantedItems.test";
import isSuiteResultSuite from "./suite/isSuiteResult.test";
import stringifySuiteResultSuite from "./suite/stringifySuiteResult.test";
import stringifySuiteResultsSuite from "./suite/stringifySuiteResults.test";
import suiteSuite from "./suite/suite.test";
import everyIsTestResultSuite from "./test/areTestResults.test";
import isPassedTestResultSuite from "./test/isPassedTestResult.test";
import isTestResultSuite from "./test/isTestResult.test";
import stringifyTestResultSuite from "./test/stringifyTestResult.test";
import stringifyTestResultsSuite from "./test/stringifyTestResults.test";
import testSuite from "./test/test.test";
import testMapSuite from "./test/testMap.test";
import testNameSuite from "./test/testName.test";
import testResultsFilterTupleSuite from "./test/testResultsFilterTuple.test";
import deepEqualSuite from "./utils/deepEqual.test";
import promiseWrapSuite from "./utils/promiseWrap.test";
import stringifySuite from "./utils/stringify.test";

export default Promise.all([
	/** Compare */
	compareSuite("src/compare/compare.ts"),
	stringifyMatchingItemsSuite("src/compare/stringifyMatchingItems.ts"),
	stringifyMissingItemsSuite("src/compare/compareArrayMissingItems.ts"),
	compareArraysSuite("src/compare/compareArrays.ts"),
	stringifyUnwantedItemsSuite("src/compare/stringifyUnwantedItemsSuite.ts"),
	compareObjectsSuite("src/compare/compareObjects.ts"),
	comparePrimitivesSuite("src/compare/comparePrimitives.ts"),
	/** Suite */
	isSuiteResultSuite("src/suite/isSuiteResult.ts"),
	suiteSuite("src/suite/suite.ts"),
	stringifySuiteResultSuite("src/suite/suiteResultToString.ts"),
	stringifySuiteResultsSuite("src/suite/suiteResultToStringMap.ts"),
	/** Test */
	everyIsTestResultSuite("src/test/everyIsTestResult.ts"),
	isPassedTestResultSuite("src/test/isPassedTestResult.ts"),
	isTestResultSuite("src/test/isTestResult.ts"),
	testSuite("src/test/test.ts"),
	testMapSuite("src/test/testMap.ts"),
	testNameSuite("src/test/testName.ts"),
	testResultsFilterTupleSuite("src/test/testResultsFilterTuple.ts"),
	stringifyTestResultSuite("src/test/testResultToString.ts"),
	stringifyTestResultsSuite("src/test/testResultToStringMap.ts"),
	/** Utils */
	deepEqualSuite("src/utils/deepEqual.ts"),
	promiseWrapSuite("src/utils/promiseWrap.ts"),
	stringifySuite("src/utils/stringify.ts")
])
	.then(stringifySuiteResults)
	.then(console.log);
