import fastDeepEqual from "fast-deep-equal";

/**
 * Deep compare using Node's `assert`.
 *
 * @category Common
 */
export const deepEqual =
	<Received>(received: Received) =>
	<Wanted>(wanted: Wanted) =>
		fastDeepEqual(received, wanted);
