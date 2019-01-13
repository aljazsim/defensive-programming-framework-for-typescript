import { ArgumentError } from "../argument-error";
import { isEmpty, isMatch, isNullOrEmpty, isNullOrWhiteSpace } from "./string-is-extensions";

// #region Functions (4)

/**
 * Returns the original value if it is empty; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The  original value if it is empty; otherwise throws a new ArgumentError.
 */
export function mustBeEmpty(value: string | null | undefined): string | null | undefined
{
    if (!isEmpty(value))
    {
        throw new ArgumentError("Value must be empty.");
    }

    return value;
}

/**
 * Returns the original value if it does equal null or is empty; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The  original value if it does equal null or is empty; otherwise throws a new ArgumentError.
 */
export function mustBeNullOrEmpty(value: string | null | undefined): string | null | undefined
{
    if (!isNullOrEmpty(value))
    {
        throw new ArgumentError("Value must be null or empty.");
    }

    return value;
}

/**
 * Returns the original value if it equals null or whitespace; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The  original value if it equals null or whitespace; otherwise throws a new ArgumentError.
 */
export function mustBeNullOrWhiteSpace(value: string | null | undefined): string | null | undefined
{
    if (!isNullOrWhiteSpace(value))
    {
        throw new ArgumentError("Value must be null or whitespace.");
    }

    return value;
}

/**
 * Returns the original value if it does match the specified regular expression; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @param regex - The regular expression.
 * @returns - The original value if it does match the specified regular expression; otherwise throws a new ArgumentError.
 */
export function mustMatch(value: string | null | undefined, regex: RegExp | null | undefined): string | null | undefined
{
    if (!isMatch(value, regex))
    {
        throw new ArgumentError(`Value must match ${regex}.`);
    }

    return value;
}

// #endregion
