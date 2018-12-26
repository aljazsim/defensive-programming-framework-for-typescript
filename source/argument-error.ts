/**
 * The argument error.
 *
 * @export
 * @class ArgumentError
 * @extends {Error}
 */
export class ArgumentError extends Error
{
	// #region Constructors (1)

	/**
	 * Creates an instance of FooError.
	 * @param {string} errorMessage
	 * @memberof FooError
	 */
	constructor(errorMessage: string)
	{
		super(errorMessage);

		Object.setPrototypeOf(this, ArgumentError.prototype);
	}

	// #endregion
}
