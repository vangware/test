import { EMPTY } from "../constants";

/**
 * Takes a title and a value and turns it into an inline comment.
 *
 * @param formatter Color/style formatter for the text.
 */
export const comment = (formatter: (source: string) => string) =>
	/**
	 * @param title Comment title.
	 */
	(title: string) =>
		/**
		 * @param value Value to concat with comment.
		 */
		(value: string | undefined) =>
			formatter(
				`// ${title}${value !== undefined ? `: ${value}` : EMPTY}`
			);
