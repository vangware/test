import { suiteResultToStringMap } from "../src/suite/suiteResultToStringMap";
import compareSuite from "./compare/compare.test";
import compareArrayMatchingItemsSuite from "./compare/compareArrayMatchingItems.test";
import compareArrayMissingItemsSuite from "./compare/compareArrayMissingItems.test";
import compareArraysSuite from "./compare/compareArrays.test";
import compareArrayUnwantedItemsSuite from "./compare/compareArrayUnwantedItems.test";
import compareObjectsSuite from "./compare/compareObjects.test";
import comparePrimitivesSuite from "./compare/comparePrimitives.test";
import isSuiteResultSuite from "./suite/isSuiteResult.test";
import suiteSuite from "./suite/suite.test";
import suiteResultToStringSuite from "./suite/suiteResultToString.test";
import suiteResultToStringMapSuite from "./suite/suiteResultToStringMap.test";
import everyIsTestResultSuite from "./test/areTestResults.test";
import isPassedTestResultSuite from "./test/isPassedTestResult.test";
import isTestResultSuite from "./test/isTestResult.test";
import testSuite from "./test/test.test";
import testMapSuite from "./test/testMap.test";
import testNameSuite from "./test/testName.test";
import testResultsFilterTupleSuite from "./test/testResultsFilterTuple.test";
import testResultToStringSuite from "./test/testResultToString.test";
import testResultToStringMapSuite from "./test/testResultToStringMap.test";
import promiseWrapSuite from "./utils/promiseWrap.test";
import stringifySuite from "./utils/stringify.test";

export default Promise.all([
	/** Compare */
	compareSuite("src/compare/compare.ts"),
	compareArrayMatchingItemsSuite("src/compare/compareArrayMatchingItems.ts"),
	compareArrayMissingItemsSuite("src/compare/compareArrayMissingItems.ts"),
	compareArraysSuite("src/compare/compareArrays.ts"),
	compareArrayUnwantedItemsSuite("src/compare/compareArrayUnwantedItems.ts"),
	compareObjectsSuite("src/compare/compareObjects.ts"),
	comparePrimitivesSuite("src/compare/comparePrimitives.ts"),
	/** Suite */
	isSuiteResultSuite("src/suite/isSuiteResult.ts"),
	suiteSuite("src/suite/suite.ts"),
	suiteResultToStringSuite("src/suite/suiteResultToString.ts"),
	suiteResultToStringMapSuite("src/suite/suiteResultToStringMap.ts"),
	/** Test */
	everyIsTestResultSuite("src/test/everyIsTestResult.ts"),
	isPassedTestResultSuite("src/test/isPassedTestResult.ts"),
	isTestResultSuite("src/test/isTestResult.ts"),
	testSuite("src/test/test.ts"),
	testMapSuite("src/test/testMap.ts"),
	testNameSuite("src/test/testName.ts"),
	testResultsFilterTupleSuite("src/test/testResultsFilterTuple.ts"),
	testResultToStringSuite("src/test/testResultToString.ts"),
	testResultToStringMapSuite("src/test/testResultToStringMap.ts"),
	/** Utils */
	promiseWrapSuite("src/utils/promiseWrap.ts"),
	stringifySuite("src/utils/stringify.ts")
])
	.then(suiteResultToStringMap)
	.then(console.log);
