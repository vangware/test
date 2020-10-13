#!/usr/bin/env node
import { existsSync } from "fs";
import { resolve } from "path";
import { register } from "ts-node";
import { run } from "./run";
import { isTestFile } from "./utils/isTestFile";

// Register ts-node to support TypeScript files.
// eslint-disable-next-line functional/no-expression-statement
register();

// Takes the directory as a process argument, "./tests" by default.
const directory = process.argv[2] || resolve(process.cwd(), "./tests");

// Only run the suite if the route exists.
export default existsSync(directory)
	? run(isTestFile)(directory)
	: console.error(`Error: ${directory} is not a valid directory.`);
