import type { AsynchronousIterable } from "@vangware/types";
import type { ReadOnlyURL } from "./ReadOnlyURL.js";

/**
 * Iterable of `ReadOnlyURL`s.
 *
 * @category File System
 */
export type ReadOnlyURLs = AsynchronousIterable<ReadOnlyURL>;
