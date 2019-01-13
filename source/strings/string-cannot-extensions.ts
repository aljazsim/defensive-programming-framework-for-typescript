import { ArgumentError } from "../argument-error";
import { isEmpty, isMatch, isNullOrWhiteSpace } from "./string-is-extensions";

// #region Functions (4)

/**
 * Returns the original value if it is not empty; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The  original value if it is not empty; otherwise throws a new ArgumentError.
 */
export function cannotBeEmpty(value: string | null | undefined): string | null | undefined
{
    if (isEmpty(value))
    {
        throw new ArgumentError("Value cannot be empty.");
    }

    return value;
}

/**
 * Returns the original value if it does not equal null or is empty; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The  original value if it does not equal null or is empty; otherwise throws a new ArgumentError.
 */
export function cannotBeNullOrEmpty(value: string | null | undefined): string | null | undefined
{
    if (value === null ||
        value === undefined)
    {
        throw new ArgumentError("Value cannot be null.");
    }
    else if (isEmpty(value))
    {
        throw new ArgumentError("Value cannot be empty.");
    }

    return value;
}

/**
 * Returns the original value if it does not equal null or whitespace; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The  original value if it does not equal null or whitespace; otherwise throws a new ArgumentError.
 */
export function cannotBeNullOrWhiteSpace(value: string | null | undefined): string | null | undefined
{
    if (value === null ||
        value === undefined)
    {
        throw new ArgumentError("Value cannot be null.");
    }
    else if (isEmpty(value))
    {
        throw new ArgumentError("Value cannot be empty.");
    }
    else if (isNullOrWhiteSpace(value))
    {
        throw new ArgumentError("Value cannot be white space.");
    }

    return value;
}

/**
 * Returns the original value if it does not match the specified regular expression; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @param regex - The regular expression.
 * @returns - The original value if it does not match the specified regular expression; otherwise throws a new ArgumentError.
 */
export function cannotMatch(value: string | null | undefined, regex: RegExp | null | undefined): string | null | undefined
{
    if (isMatch(value, regex))
    {
        throw new ArgumentError(`Value cannot match ${regex}.`);
    }

    return value;
}

// #endregion
