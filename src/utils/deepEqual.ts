import { deepStrictEqual } from "assert/strict";

/**
 * Deep compare using Node's `assert`.
 *
 * @category Common
 */
export const deepEqual =
	<Received>(received: Received) =>
	<Wanted>(wanted: Wanted) => {
		// eslint-disable-next-line functional/no-try-statement
		try {
			// eslint-disable-next-line functional/no-expression-statement
			deepStrictEqual(received, wanted);

			return true;
		} catch {
			return false;
		}
	};
