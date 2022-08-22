import type { ReadOnlyURL } from "./ReadOnlyURL.js";
import type { Test } from "./Test.js";

export type TestTuple<Value = unknown> = readonly [ReadOnlyURL, Test<Value>];
