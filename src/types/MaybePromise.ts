/**
 * Value tha can be possibly wrapped in a Promise.
 *
 * @category Test
 */
export type MaybePromise<Value> = Promise<Value> | Value;
