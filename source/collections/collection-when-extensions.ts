import { contains, containsDuplicates, containsNull, containsOnlyNull, isEmptyArray, isEqualToArray, isOneOfArrays } from "./collection-is-extensions";

// #region Functions (8)

/**
 * Returns the original value if the specified value contains any items corresponding to the selector function; otherwise throws a new ArgumentException; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param func - The function.
 * @param defaultValue - The default value.
 * @returns - The original value if the specified value contains any items corresponding to the selector function; otherwise returns the original value.
 */
export function whenContains<T>(value: Array<T> | null | undefined, func: ((value: T | null | undefined) => boolean) | null | undefined, defaultValue: Array<T> | null | undefined): Array<T> | null | undefined
{
    if (contains(value, func))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns the original value if the specified value contains duplicates; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The original value if the specified value contains duplicates; otherwise returns the original value.
 */
export function whenContainsDuplicates<T>(value: Array<T> | null | undefined, defaultValue: Array<T> | null | undefined): Array<T> | null | undefined
{
    if (containsDuplicates(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns the original value if the specified value contains null values; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The original value if the specified value contains null values; otherwise returns the original value.
 */
export function whenContainsNull<T>(value: Array<T> | null | undefined, defaultValue: Array<T> | null | undefined): Array<T> | null | undefined
{
    if (containsNull(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns the original value if the specified value contains only null values; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The original value if the specified value contains only null values; otherwise returns the original value.
 */
export function whenContainsOnlyNull<T extends any | null | undefined>(value: Array<T> | null | undefined, defaultValue: Array<T> | null | undefined): Array<T> | null | undefined
{
    if (containsOnlyNull(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns the original value if the specified value is empty; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The original value if the specified value is empty; otherwise returns the original value.
 */
export function whenIsEmptyArray<T extends any | null | undefined>(value: Array<T> | null | undefined, defaultValue: Array<T> | null | undefined): Array<T> | null | undefined
{
    if (isEmptyArray(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns the original value if the specified value is equal to the compared value; otherwise returns the original value.
 *
 * @export
 * @template T
 * @param value1 - The value type.
 * @param value2 - The value 1.
 * @param [ignoreOrder=true] - The value 2.
 * @param defaultValue - The default value.
 * @returns - The original value if the specified value is equal to the compared value; otherwise returns the original value.
 */
export function whenIsEqualToArray<T>(value1: Array<T> | null | undefined, value2: Array<T> | null | undefined, ignoreOrder: boolean = true, defaultValue: Array<T> | null | undefined): Array<T> | null | undefined
{
    if (isEqualToArray(value1, value2, ignoreOrder))
    {
        return defaultValue;
    }
    else
    {
        return value1;
    }
}

/**
 * Returns the original value if the specified value is null or empty; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The original value if the specified value is null or empty; otherwise returns the original value.
 */
export function whenIsNullOrEmptyArray<T>(value: Array<T> | null | undefined, defaultValue: Array<T> | null | undefined): Array<T> | null | undefined
{
    if (value === null ||
        value === undefined)
    {
        return defaultValue;
    }
    if (isEmptyArray(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns the original value if the specified value belongs to the specified set; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param set - The set.
 * @param defaultValue - The default value.
 * @returns - The original value if the specified value belongs to the specified set; otherwise returns the original value.
 */
export function whenIsOneOfArray<T>(value: T | null | undefined, set: Array<T> | null | undefined, defaultValue: T | null | undefined): T | null | undefined
{
    if (isOneOfArrays(value, set))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

// #endregion
