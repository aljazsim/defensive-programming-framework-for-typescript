import { isEmpty, isMatch, isNullOrEmpty, isNullOrWhiteSpace } from "./string-is-extensions";

// #region Functions (4)

/**
 * Returns default value when the original value does not match the specified regular expression; otherwise returns the original value.
 *
 * @export
 * @param value - The value.
 * @param regex - The regex.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value does not match the specified regular expression; otherwise returns the original value.
 */
export function whenIsNotMatch(value: string | null | undefined, regex: RegExp | null | undefined, defaultValue: string | null | undefined): string | null | undefined
{
    if (!isMatch(value, regex))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is not empty; otherwise returns the original value.
 *
 * @export
 * @param value - The value.
 * @returns - The default value when the original value is not empty; otherwise returns the original value.
 */
export function whenIsNotEmpty(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
{
    if (!isEmpty(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is not null or undefined or empty; otherwise returns the original value.
 *
 * @export
 * @param value - The value.
 * @returns - The default value when the original value is not null or undefined or empty; otherwise returns the original value.
 */
export function whenIsNotNullOrEmpty(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
{
    if (!isNullOrEmpty(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is not null or undefined or empty or white space; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value is not null or undefined or empty or white space; otherwise returns the original value.
 */
export function whenIsNotNullOrWhiteSpace(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
{
    if (!isNullOrWhiteSpace(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

// #endregion
