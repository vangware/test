#!/usr/bin/env node
import { existsSync } from "fs";
import { resolve } from "path";
import { register } from "ts-node";
import { isTestFile } from "./isTestFile";
import { run } from "./run";

/**
 * Register ts-node to support TypeScript files.
 *
 * @category Internal
 */
export const registry = register();

/**
 * Takes the directory as a process argument, "./tests" by default.
 *
 * @category Internal
 */
const directory = process.argv[2] ?? resolve(process.cwd(), "./tests");

/**
 * Only run the suite if the route exists.
 *
 * @category Internal
 */
export default existsSync(directory)
	? run(isTestFile)(directory)
	: console.error(`Error: ${directory} is not a valid directory.`);
