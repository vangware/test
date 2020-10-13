/**
 * Identity monad (takes a value and returns it without changing it).
 */
export const id = <Value>(value: Value) => value;

export default id;
