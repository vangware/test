#!/usr/bin/env node
import { existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { isTestFile } from "./isTestFile.js";
import { run } from "./run.js";

/**
 * Takes the directory as a process argument, "./tests" by default.
 *
 * @category Internal
 */
const directory = process.argv[2] ?? pathToFileURL("./tests/");

/**
 * Only run the suite if the route exists.
 *
 * @category Internal
 */
export default existsSync(directory)
	? run(isTestFile)(directory)
	: // eslint-disable-next-line no-console
	  console.error(`Error: ${directory.toString()} is not a valid directory.`);
