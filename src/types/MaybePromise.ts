/**
 * Value tha can be possibly wrapped in a Promise.
 */
export type MaybePromise<Value> = Promise<Value> | Value;
