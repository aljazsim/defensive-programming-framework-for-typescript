/**
 * The argument error.
 *
 * @export
 * @class ArgumentError
 * @extends {Error}
 */
export class ArgumentError extends Error
{
    /**
	 * Creates an instance of ArgumentError.
	 * @param errorMessage
	 * @memberof FooError
	 */
    constructor(errorMessage: string)
    {
        super(errorMessage);

        Object.setPrototypeOf(this, ArgumentError.prototype);
    }
}
