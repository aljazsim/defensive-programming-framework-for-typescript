import { cannotBeNull } from "../objects/object-cannot-extensions";

// #region Functions (4)

/**
 * Determines whether the specified value matches the specified regular expression.
 *
 * @export
 * @param value - The value.
 * @param regex - The regular expression
 * @returns - True if specified value matches the specified regular expression; otherwise, false.
 */
export function isMatch(value: string | null | undefined, regex: RegExp | null | undefined): boolean
{
    cannotBeNull(regex);

    if (value === null ||
        value === undefined)
    {
        return false;
    }
    else if (regex !== null &&
        regex !== undefined)
    {
        return regex.test(value);
    }
    else
    {
        return false;
    }
}

/**
 * Determines where the specified value is empty.
 *
 * @export
 * @param value - The value
 * @returns - True if the specified value is empty; false otherwise.
 */
export function isEmpty(value: string | null | undefined): boolean
{
    if (value === null ||
        value === undefined)
    {
        return false;
    }
    else
    {
        return value === "";
    }
}

/**
 * Determines where the specified value is null or empty.
 *
 * @export
 * @param value - The value
 * @returns - True if the specified value is null or empty; false otherwise.
 */
export function isNullOrEmpty(value: string | null | undefined): boolean
{
    if (value === null ||
        value === undefined)
    {
        return true;
    }
    else
    {
        return value === "";
    }
}

/**
 * Determines whether the specified value is null or whitespace.
 *
 * @export
 * @param value - The value.
 * @returns - True if the specified value is null or whitespace; false otherwise.
 */
export function isNullOrWhiteSpace(value: string | null | undefined): boolean
{
    if (value === null ||
        value === undefined)
    {
        return true;
    }
    else
    {
        return value.trim() === "";
    }
}

// #endregion
