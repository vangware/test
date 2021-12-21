import { stringifySuiteResults } from "../src/suite/stringifySuiteResults.js";
import compareSuite from "./compare/compare.test.js";
import compareArraysSuite from "./compare/compareArrays.test.js";
import compareObjectsSuite from "./compare/compareObjects.test.js";
import comparePrimitivesSuite from "./compare/comparePrimitives.test.js";
import stringifyMatchingItemsSuite from "./compare/stringifyMatchingItems.test.js";
import stringifyMissingItemsSuite from "./compare/stringifyMissingItems.test.js";
import stringifyUnwantedItemsSuite from "./compare/stringifyUnwantedItems.test.js";
import isSuiteResultSuite from "./suite/isSuiteResult.test.js";
import stringifySuiteResultSuite from "./suite/stringifySuiteResult.test.js";
import stringifySuiteResultsSuite from "./suite/stringifySuiteResults.test.js";
import suiteSuite from "./suite/suite.test.js";
import everyIsTestResultSuite from "./test/areTestResults.test.js";
import isPassedTestResultSuite from "./test/isPassedTestResult.test.js";
import isTestResultSuite from "./test/isTestResult.test.js";
import stringifyTestResultSuite from "./test/stringifyTestResult.test.js";
import stringifyTestResultsSuite from "./test/stringifyTestResults.test.js";
import testSuite from "./test/test.test.js";
import testMapSuite from "./test/testMap.test.js";
import testNameSuite from "./test/testName.test.js";
import testResultsFilterTupleSuite from "./test/testResultsFilterTuple.test.js";
import deepEqualSuite from "./utils/deepEqual.test.js";
import promiseWrapSuite from "./utils/promiseWrap.test.js";
import stringifySuite from "./utils/stringify.test.js";

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
	stringifySuite("src/utils/stringify.ts"),
])
	.then(stringifySuiteResults)
	.then(console.log);
