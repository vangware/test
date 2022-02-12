#!/usr/bin/env node

import { pathToFileURL } from "node:url";
import { getFilePaths } from "./getFilePaths.js";
import { isTestFilePath } from "./isTestFilePath.js";
import { runAndStringifyTests } from "./runAndStringifyTests.js";
import { testsImport } from "./testsImport.js";

getFilePaths(pathToFileURL(process.argv.at(2) ?? "./tests/"))
	.then(paths => paths.filter(isTestFilePath))
	.then(testsImport)
	.then(runAndStringifyTests)
	// eslint-disable-next-line no-console
	.then(console.log)
	// eslint-disable-next-line no-console
	.catch(results => (console.error(results), process.exit(1)));
